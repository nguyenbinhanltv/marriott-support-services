import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, concatAll, map, take, tap } from 'rxjs/operators';
import { Admin } from '../models/admin.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private admin: Admin | null = null;
  private token: string | null = '';

  constructor(
    private http: HttpClient,
    private router: Router
    ) {

  }

  public login(loginForm: {
    userName: string,
    password: string
  }): Observable<unknown> {
    const outer$ = this.http.post(environment.apiEndpoint + 'users/admin/login', {
      userName: loginForm.userName,
      password: loginForm.password
    })
      .pipe(
        take(1),
        tap((res: any) => {
          if (!res.data.token) {
            throw new Error('Failed to login');
          }
          this.token = res.data.token;
          localStorage.setItem('token', res.data.token);
        })
      );

      const combined$ = outer$.pipe(
        map((res: any) => this.getAdminInfo(res.data.token)),
        concatAll()
      );

      return combined$;
  }

  public signOut(): void {
    localStorage.removeItem('admin');
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  private getUserFromLocalStorage(): void {
    this.admin = JSON.parse(localStorage.getItem('admin') as string);
  }

  private getTokenFromLocalStorage(): void {
    this.token = localStorage.getItem('token');
  }

  private getAdminInfo(token: string): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({
        token,
      }),
    };
    return this.http
      .post(environment.apiEndpoint + 'users/admin/logedin', {}, httpOptions)
      .pipe(
        take(1),
        tap((payload: any) => {
          if (!payload) {
            throw new Error('Failed to get user');
          }
          this.admin = payload.data;
          localStorage.setItem('admin', JSON.stringify(payload.data));
        })
      );
  }

  get getAdmin(): Admin {
    return this.admin as Admin;
  }

  get getToken(): string {
    return this.token as string;
  }
}

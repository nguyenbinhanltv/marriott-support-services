import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, concatAll, map, take, tap } from 'rxjs/operators';
import { Admin } from '../models/admin.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private admin: Admin | null = null;
  private token: string | null = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.getTokenFromLocalStorage();
    this.getAdminFromLocalStorage();
  }

  public getAllStaff(): Observable<any> {
    return this.http
      .get<any>(environment.apiEndpoint + 'users/admin/all')
      .pipe(map((res) => res.data));
  }

  public addAdmin(admin: any): Observable<any> {
    return this.http.post<any>(environment.apiEndpoint + 'users/admin', admin);
  }

  public login(loginForm: {
    userName: string;
    password: string;
  }): Observable<unknown> {
    const outer$ = this.http
      .post(environment.apiEndpoint + 'users/admin/login', {
        userName: loginForm.userName,
        password: loginForm.password,
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
    if (localStorage.getItem('token') && localStorage.getItem('admin')) {
      localStorage.removeItem('admin');
      localStorage.removeItem('token');
      this.afAuth.signOut();

      this.router.navigate(['']);
    }
  }

  private getAdminFromLocalStorage(): void {
    this.admin = JSON.parse(localStorage.getItem('admin') as unknown as string);
  }

  private getTokenFromLocalStorage(): void {
    if (localStorage.length) {
      this.token = localStorage.getItem('token');
    }
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

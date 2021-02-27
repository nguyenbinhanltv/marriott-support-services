import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClient(): Observable<any> {
    return this.http.get<any>(environment.apiEndpoint + 'client/all')
      .pipe(
        map(res => res.data as Client[])
      );
  }

  addClient(client: Client): Observable<any> {
    return this.http.post<any>(environment.apiEndpoint + 'client', client);
  }

  deleteClient(_id: string | undefined): Observable<any> {
    return this.http.post<any>(environment.apiEndpoint + 'client/delete', {_id});
  }
}

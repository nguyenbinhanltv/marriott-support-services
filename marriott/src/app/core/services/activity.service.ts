import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient
  ) { }

  getAllActivities(): Observable<any> {
    return this.http.get<any>(environment.apiEndpoint + 'activities/all')
      .pipe(
        map(res => res.data as Activity[])
      );
  }

  addActivity(activity: Activity): Observable<any> {
    return this.http.post<any>(environment.apiEndpoint + 'activities', activity);
  }

  deleteActivity(_id: string): Observable<any> {
    return this.http.post<any>(environment.apiEndpoint + 'activities/delete', _id);
  }
}

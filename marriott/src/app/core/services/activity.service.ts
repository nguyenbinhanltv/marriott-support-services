import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Activity } from '../models/activity.model';

import { activityPricing } from '../dummy/data';

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

  getActive(startDate: string, endDate: string): number | number[] {
    const sd = new Date(startDate).getDay();
    const ed = new Date(endDate).getDay();

    if (sd == ed) {
      return sd;
    }

    return [sd, ed];
  }

  calNdisPrice(support: number, startDate: string, endDate: string) {
    const time = (new Date(endDate).getTime() - new Date(startDate).getTime()) / 3600000 / 2;
    let pricing: any;
    activityPricing.map(act => {
      if (act.support == support && typeof(act.active) == typeof(this.getActive(startDate, endDate))) {
        pricing = act;
      }
    });


    if (pricing) {
      return time * pricing.price;
    }

    return null;
  }
}

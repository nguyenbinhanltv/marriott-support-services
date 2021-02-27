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

  updateActivity(activity: Activity): Observable<any> {
    return this.http.post<any>(environment.apiEndpoint + 'activities/update', activity);
  }

  getActive(startDate: string, endDate: string): number | number[] {
    const sd = new Date(startDate).getDay();
    const ed = new Date(endDate).getDay();

    if (sd == ed) {
      return sd;
    }

    return [sd, ed];
  }

  calNdisPrice(support: number, startDate: string, endDate: string): number | null {
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

  calExtraPrice(info: any): number {
    let price = 0;

    for(let i of info) {
      price += i.service.price;
    }

    return price;
  }

  activityPipe(activities: Activity[]): any[] {
    const result: any[] = [];
    for (let act of activities) {
      result.push({
        category: act.category,
        description: act.description,
        startDate: act.startDate,
        endDate: act.endDate,
        support: act.support,
        type: act.type,
        title: act.title,
        inspector: act.inspector.email,
        totalCost: act.invoice.totalCost
      });
    }

    return result;
  }

  ndisBillPipe(activity: Activity, activityService: any) {
    const result: any[] = [];
    for (let act of activity.client) {
      result.push({
        name: act.displayName,
        email: act.email,
        contactDetail: act.contactDetail,
        NDISNo: act.NDISNo,
        marriottDivision: act.marriottDivision,
        totalCost: activityService.calNdisPrice(activity.support, activity.startDate, activity.endDate)
      });
    }

    return result;
  }

  extraBillPipe(activity: Activity) {
    const result: any[] = [];
    for (let act of activity.invoice.info) {
      result.push({
        name: act.client.displayName,
        email: act.client.email,
        contactDetail: act.client.contactDetail,
        NDISNo: act.client.NDISNo,
        marriottDivision: act.client.marriottDivision,
        time: act.time,
        service: act.service.title,
        price: act.service.price
      });
    }

    result.push({
      totalCost: activity.invoice.totalCost
    });

    return result;
  }
}

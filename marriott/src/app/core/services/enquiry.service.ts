import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Enquiry } from '../models/enquiry.model';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http: HttpClient) { }

  addEnquity(enquiryForm: Enquiry): Observable<Enquiry> {
    return this.http.post<Enquiry>(environment.apiEndpoint + "enquiries", enquiryForm);
  }

  addBucket(file: NzUploadFile): Observable<string> {
    return this.http.post<string>("https://marriott-support-services.appspot.com/enquiries", file, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  getEnquiries(): Observable<any> {
    return this.http.get<any>(environment.apiEndpoint + "enquiries/all")
      .pipe(
        map(res => res.data as Enquiry[])
      );
  }
}

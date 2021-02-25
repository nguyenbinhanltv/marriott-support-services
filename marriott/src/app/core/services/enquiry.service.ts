import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
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

  getEnquiries(): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>(environment.apiEndpoint + "enquiries/all");
  }
}

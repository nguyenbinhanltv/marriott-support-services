import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';
import { map } from 'rxjs/operators';
import { Enquiry } from 'src/app/core/models/enquiry.model';
import { EnquiryService } from 'src/app/core/services/enquiry.service';

@Component({
  selector: 'app-enquiry-management',
  templateUrl: './enquiry-management.component.html',
  styleUrls: ['./enquiry-management.component.scss']
})
export class EnquiryManagementComponent implements OnInit {
  listOfData: Enquiry[] = [];
  displayData: Enquiry[] = [];
  allChecked = false;
  indeterminate = false;
  fixedColumn = false;

  constructor(
    private enquiryService: EnquiryService
  ) { }

  ngOnInit(): void {
    this.enquiryService.getEnquiries().subscribe(data => {
      this.listOfData = data;
    });
  }

  currentPageDataChange($event: any): void {
    this.displayData = $event;
  }
}

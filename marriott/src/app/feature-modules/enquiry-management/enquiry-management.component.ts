import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';
import { Enquiry } from 'src/app/core/models/enquiry.model';
import { EnquiryService } from 'src/app/core/services/enquiry.service';

interface ItemData extends Enquiry {
  checked: boolean;
  expand: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-enquiry-management',
  templateUrl: './enquiry-management.component.html',
  styleUrls: ['./enquiry-management.component.scss']
})
export class EnquiryManagementComponent implements OnInit {
  listOfData: ReadonlyArray<ItemData> = [];
  displayData: ReadonlyArray<ItemData> = [];
  allChecked = false;
  indeterminate = false;
  fixedColumn = false;

  constructor(
    private formBuilder: FormBuilder,
    private enquiryService: EnquiryService
  ) { }

  ngOnInit(): void {
    this.enquiryService.getEnquiries().subscribe(data => {
      this.listOfData = data as ItemData[];
      this.updateData();
    });
  }

  currentPageDataChange($event: ReadonlyArray<ItemData>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  updateData(): void {
    for (let data of this.listOfData) {
      data.checked = false;
      data.expand = false;
    }
  }
}

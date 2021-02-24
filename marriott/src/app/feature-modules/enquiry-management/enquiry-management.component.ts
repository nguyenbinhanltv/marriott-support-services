import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableSize } from 'ng-zorro-antd/table';

interface ItemData {
  name: string;
  email: string;
  subject: string;
  checked: boolean;
  expand: boolean;
  message: string;
  disabled?: boolean;
  file: string;
  submitTime: string;
}

interface Setting {
  bordered: boolean;
  loading: boolean;
  pagination: boolean;
  sizeChanger: boolean;
  title: boolean;
  header: boolean;
  footer: boolean;
  expandable: boolean;
  checkbox: boolean;
  fixHeader: boolean;
  noResult: boolean;
  ellipsis: boolean;
  simple: boolean;
  size: NzTableSize;
  tableScroll: string;
  tableLayout: NzTableLayout;
  position: NzTablePaginationPosition;
  paginationType: NzTablePaginationType;
}

@Component({
  selector: 'app-enquiry-management',
  templateUrl: './enquiry-management.component.html',
  styleUrls: ['./enquiry-management.component.scss']
})
export class EnquiryManagementComponent implements OnInit {
  settingForm?: FormGroup;
  listOfData: ReadonlyArray<ItemData> = [];
  displayData: ReadonlyArray<ItemData> = [];
  allChecked = false;
  indeterminate = false;
  fixedColumn = false;
  settingValue!: Setting;

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

  generateData(): ItemData[] {
    const data: ItemData[] = [];
    for (let i = 1; i <= 100; i++) {
      data.push({
        name: 'John Brown',
        email: `${i}2@gmail.com`,
        subject: `New York No. ${i} Lake Park`,
        message: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        file: `file number ${i}`,
        checked: false,
        expand: false,
        submitTime: new Date(Date.now()).toLocaleString()
      });
    }
    return data;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.settingForm = this.formBuilder.group({
      bordered: true,
      loading: false,
      pagination: true,
      sizeChanger: true,
      title: true,
      header: true,
      footer: true,
      expandable: true,
      checkbox: true,
      fixHeader: true,
      noResult: false,
      ellipsis: true,
      simple: false,
      size: 'default',
      paginationType: 'small',
      tableScroll: 'unset',
      tableLayout: 'auto',
      position: 'bottom'
    });
    this.settingValue = this.settingForm.value;
    this.settingForm.valueChanges.subscribe(value => (this.settingValue = value));
    this.settingForm.get('noResult')!.valueChanges.subscribe(empty => {
      if (empty) {
        this.listOfData = [];
      } else {
        this.listOfData = this.generateData();
      }
    });
    this.listOfData = this.generateData();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import { Activity, Invoice, Quotation } from 'src/app/core/models/activity.model';
import { Client } from 'src/app/core/models/client.model';
import { ActivityService } from 'src/app/core/services/activity.service';
import { ExportService } from 'src/app/core/services/export.service';
import { servicePrices } from '../../core/dummy/data';

@Component({
  selector: 'app-activity-management',
  templateUrl: './activity-management.component.html',
  styleUrls: ['./activity-management.component.scss']
})
export class ActivityManagementComponent implements OnInit {
  fixedColumn = false;
  listOfData: Activity[] = [];
  displayData: Activity[] = [];

  isNdisBillVisible = false;
  isExtraBillVisible = false;

  validateForm!: FormGroup;
  services: Quotation[] = [];

  constructor(
    public activityService: ActivityService,
    private fb: FormBuilder,
    private msg: NzMessageService,
    private exportService: ExportService
  ) { }

  ngOnInit(): void {
    this.activityService.getAllActivities().subscribe(data => this.listOfData = data);
    this.validateForm = this.fb.group({
      time: ['', Validators.required],
      service: [, Validators.required],
      client: [, Validators.required],
      totalCost: [0, Validators.required]
    });
    this.services = servicePrices;
  }

  currentPageDataChange($event: any): void {
    this.displayData = $event;
  }

  compareDate(startDate: string, endDate: string): boolean | string {
    if (Date.now() > new Date(startDate).getTime() && Date.now() < new Date(endDate).getTime()) {
      return true;
    }

    if (Date.now() < new Date(startDate).getTime()) {
      return 'Incomplete';
    }

    return false;
  }

  showExtraModal(data: Activity): void {
    data.isExtraBillVisible = true;
  }

  handleExtraOk(data: Activity): void {
    data.isExtraBillVisible = false;
    this.submitForm(data);
  }

  handleExtraCancel(data: Activity): void {
    data.isExtraBillVisible = false;
  }

  showNdisModal(data: Activity): void {
    data.isNdisBillVisible = true;
  }

  handleNdisOk(data: Activity): void {
    data.isNdisBillVisible = false;
  }

  handleNdisCancel(data: Activity): void {
    data.isNdisBillVisible = false;
  }

  submitForm(data: Activity): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (data.invoice.info == undefined) {
      data.invoice = {
        info: [],
        totalCost: 0
      };
    }

    data.invoice.info.push({
      time: this.validateForm.value.time,
      service: this.validateForm.value.service,
      client: this.validateForm.value.client
    });

    data.invoice.totalCost = this.activityService.calExtraPrice(data.invoice.info);
    this.activityService.updateActivity(data)
    .pipe(
      map(res => res.message)
    )
    .subscribe(mes => this.msg.success(mes));
  }

  export() {
    this.exportService.exportExcel(this.activityService.activityPipe(this.listOfData), 'activities');
  }

  exportNdisBill(activity: Activity) {
    this.exportService.exportExcel(this.activityService.ndisBillPipe(activity, this.activityService), 'ndis-billing');
  }

  exportExtraBill(activity: Activity) {
    this.exportService.exportExcel(this.activityService.extraBillPipe(activity), 'extra-billing');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import { Activity, Invoice, Quotation } from 'src/app/core/models/activity.model';
import { Client } from 'src/app/core/models/client.model';
import { ActivityService } from 'src/app/core/services/activity.service';
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
    private msg: NzMessageService
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

  compareDate(startDate: string, endDate: string): boolean {
    if (Date.now() > new Date(startDate).getTime() && Date.now() < new Date(endDate).getTime()) {
      return true;
    }

    return false;
  }

  showExtraModal(): void {
    this.isExtraBillVisible = true;
  }

  handleExtraOk(data: Activity): void {
    this.isExtraBillVisible = false;
    this.submitForm(data);
  }

  handleExtraCancel(): void {
    this.isExtraBillVisible = false;
  }

  showNdisModal(): void {
    this.isNdisBillVisible = true;
  }

  handleNdisOk(): void {
    this.isNdisBillVisible = false;
  }

  handleNdisCancel(): void {
    this.isNdisBillVisible = false;
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
}

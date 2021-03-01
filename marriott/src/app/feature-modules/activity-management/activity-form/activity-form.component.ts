import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Admin } from 'src/app/core/models/admin.model';
import { Client } from 'src/app/core/models/client.model';
import { ActivityService } from 'src/app/core/services/activity.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ClientService } from 'src/app/core/services/client.service';
import { activityCategories, activityTypes, servicePrices } from '../../../core/dummy/data';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  activityTypes = activityTypes;
  activityCategories = activityCategories;
  servicePrices = servicePrices;
  allStaff!: Admin[];
  client!: Client[];

  isVisible = false;
  isOkLoading = false;
  current = 0;

  notice = false;

  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private clientService: ClientService,
    private activityService: ActivityService,
    private msg: NzMessageService
    ) {
    this.validateForm = this.fb.group({
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      category: ['', [Validators.required]],
      time: [[]],
      client: [[], [Validators.required]],
      inspector: [{}, [Validators.required]],
      absent: [, [Validators.required]],
      support: [, [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      expand: [false],
      quotation: [[]],
      invoice: [{}]
    });

    this.authService.getAllStaff().subscribe(staffs => this.allStaff = staffs);
    this.clientService.getAllClient().subscribe(client => this.client = client);
  }

  ngOnInit(): void {
  }

  onIndexChange(index: number): void {
    this.current = index;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    this.activityService.addActivity(value).subscribe(res => {
      this.msg.success('Add activity successfully');
      this.handleCancel();
    });
  }
}

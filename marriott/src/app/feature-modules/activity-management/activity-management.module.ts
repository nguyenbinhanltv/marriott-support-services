import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityManagementRoutingModule } from './activity-management-routing.module';
import { ActivityManagementComponent } from './activity-management.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  declarations: [ActivityManagementComponent, ActivityFormComponent],
  imports: [
    CommonModule,
    ActivityManagementRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzImageModule,
    NzBadgeModule,
    NzModalModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzRadioModule,
    NzInputNumberModule,
    NzStepsModule,
    NzIconModule,
    NzSpaceModule,
    NzTabsModule,
    NzPopconfirmModule
  ],
  providers: [NzMessageService]
})
export class ActivityManagementModule { }

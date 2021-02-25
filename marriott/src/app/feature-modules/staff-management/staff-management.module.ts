import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [StaffManagementComponent],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    NzTableModule,
    NzImageModule,
    NzDividerModule
  ]
})
export class StaffManagementModule { }

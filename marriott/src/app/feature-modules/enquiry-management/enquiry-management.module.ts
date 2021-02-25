import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryManagementRoutingModule } from './enquiry-management-routing.module';
import { EnquiryManagementComponent } from './enquiry-management.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [EnquiryManagementComponent],
  imports: [
    CommonModule,
    EnquiryManagementRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzImageModule
  ]
})
export class EnquiryManagementModule { }

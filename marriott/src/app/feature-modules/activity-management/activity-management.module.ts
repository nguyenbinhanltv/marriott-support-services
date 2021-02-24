import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityManagementRoutingModule } from './activity-management-routing.module';
import { ActivityManagementComponent } from './activity-management.component';


@NgModule({
  declarations: [ActivityManagementComponent],
  imports: [
    CommonModule,
    ActivityManagementRoutingModule
  ]
})
export class ActivityManagementModule { }

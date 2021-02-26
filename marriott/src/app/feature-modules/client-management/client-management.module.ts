import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { ClientManagementComponent } from './client-management.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@NgModule({
  declarations: [ClientManagementComponent],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    NzTableModule,
    NzImageModule,
    NzDividerModule
  ]
})
export class ClientManagementModule { }

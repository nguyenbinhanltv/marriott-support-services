import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { ClientManagementComponent } from './client-management.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';


@NgModule({
  declarations: [ClientManagementComponent],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    NzTableModule,
    NzImageModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule
  ]
})
export class ClientManagementModule { }

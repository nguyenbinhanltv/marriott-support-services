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
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { ClientFormComponent } from './client-form/client-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [ClientManagementComponent, ClientFormComponent],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    NzTableModule,
    NzImageModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzFormModule,
    ReactiveFormsModule,
    NzModalModule,
    NzInputModule
  ],
  providers: [NzMessageService]
})
export class ClientManagementModule { }

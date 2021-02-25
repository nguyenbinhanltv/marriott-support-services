import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { AccountSettingsComponent } from './account-settings.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';


@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzImageModule
  ]
})
export class AccountSettingsModule { }

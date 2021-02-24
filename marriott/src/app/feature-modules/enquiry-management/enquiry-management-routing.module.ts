import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryManagementComponent } from './enquiry-management.component';

const routes: Routes = [{ path: '', component: EnquiryManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryManagementRoutingModule { }

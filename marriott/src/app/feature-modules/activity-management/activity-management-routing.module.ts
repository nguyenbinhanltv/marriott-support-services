import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityManagementComponent } from './activity-management.component';

const routes: Routes = [{ path: '', component: ActivityManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityManagementRoutingModule { }

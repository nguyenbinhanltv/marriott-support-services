import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'enquiry-management' },
      { path: 'enquiry-management', loadChildren: () => import('../../feature-modules/enquiry-management/enquiry-management.module').then(m => m.EnquiryManagementModule) },
      { path: 'staff-management', loadChildren: () => import('../../feature-modules/staff-management/staff-management.module').then(m => m.StaffManagementModule) },
      { path: 'client-management', loadChildren: () => import('../../feature-modules/client-management/client-management.module').then(m => m.ClientManagementModule) },
      { path: 'activity-management', loadChildren: () => import('../../feature-modules/activity-management/activity-management.module').then(m => m.ActivityManagementModule) },
      { path: 'account-settings', loadChildren: () => import('../../feature-modules/account-settings/account-settings.module').then(m => m.AccountSettingsModule) },
      { path: '**', pathMatch: 'full', redirectTo: 'enquiry-management' },
    ], canActivate: [AuthGuard], canActivateChild: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InauthGuard } from './core/guards/inauth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'admin', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./layouts/login/login.module').then(m => m.LoginModule), canActivate: [InauthGuard], canActivateChild: [InauthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

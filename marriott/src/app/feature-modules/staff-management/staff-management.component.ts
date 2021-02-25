import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/core/models/admin.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.scss']
})
export class StaffManagementComponent implements OnInit {
  fixedColumn = false;
  listOfData: Admin[] = [];
  displayData: Admin[] = [];

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.getAllStaff().subscribe(ads => this.listOfData = ads);
  }

  currentPageDataChange($event: any): void {
    this.displayData = $event;
  }

}

import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/core/models/activity.model';
import { ActivityService } from 'src/app/core/services/activity.service';

@Component({
  selector: 'app-activity-management',
  templateUrl: './activity-management.component.html',
  styleUrls: ['./activity-management.component.scss']
})
export class ActivityManagementComponent implements OnInit {
  fixedColumn = false;
  listOfData: Activity[] = [];
  displayData: Activity[] = [];

  isNdisBillVisible = false;
  isExtraBillVisible = false;

  constructor(
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.activityService.getAllActivities().subscribe(data => this.listOfData = data);
  }

  currentPageDataChange($event: any): void {
    this.displayData = $event;
  }

  compareDate(startDate: string, endDate: string): boolean{
    if (Date.now() > new Date(startDate).getTime() && Date.now() < new Date(endDate).getTime()) {
      return true;
    }

    return false;
  }

  showExtraModal(): void {
    this.isExtraBillVisible = true;
  }

  handleExtraOk(): void {
    this.isExtraBillVisible = false;
  }

  handleExtraCancel(): void {
    this.isExtraBillVisible = false;
  }

  showNdisModal(): void {
    this.isNdisBillVisible = true;
  }

  handleNdisOk(): void {
    this.isNdisBillVisible = false;
  }

  handleNdisCancel(): void {
    this.isNdisBillVisible = false;
  }
}

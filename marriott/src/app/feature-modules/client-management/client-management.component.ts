import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from '../../core/services/client.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent implements OnInit {
  fixedColumn = false;
  listOfData: Client[] = [];
  displayData: Client[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getAllClient().subscribe(data => this.listOfData = data);
  }

  currentPageDataChange($event: any): void {
    this.displayData = $event;
  }
}

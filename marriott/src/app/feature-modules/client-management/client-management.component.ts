import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/core/models/client.model';
import { ExportService } from 'src/app/core/services/export.service';
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
    private clientService: ClientService,
    private msg: NzMessageService,
    private exportService: ExportService
  ) { }

  ngOnInit(): void {
    this.clientService.getAllClient().subscribe(data => this.listOfData = data);
  }

  currentPageDataChange($event: any): void {
    this.displayData = $event;
  }

  deleteClient(_id: string | undefined) {
    return this.clientService.deleteClient(_id)
    .pipe(
      map(res => res.message)
    )
    .subscribe(message => {
      this.msg.success(message);
    });
  }

  export() {
    this.exportService.exportExcel(this.listOfData, 'client-list');
  }
}

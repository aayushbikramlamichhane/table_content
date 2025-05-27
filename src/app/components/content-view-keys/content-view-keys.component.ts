import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TableData, TableEvent } from 'src/app/shared/models/data';

@Component({
  selector: 'app-content-view-keys',
  templateUrl: './content-view-keys.component.html',
  styleUrls: ['./content-view-keys.component.scss'],
})
export class ContentViewKeysComponent implements OnInit {
  objectKeys!: any[];
  @Input() tableDataList!: TableData[];
  @Output() sortValue = new Subject<TableEvent>();

  ngOnInit(): void {
    // getting keys from tableDataList
    this.objectKeys = Object.keys(this.tableDataList[0]);
  }

  
  // For emitting name of field and sortOrder
  onSort(event: TableEvent) {
    this.sortValue.next({
      name: event?.name,
      sortOrder: event?.sortOrder,
    });
  }
}

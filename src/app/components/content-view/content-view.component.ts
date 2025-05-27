import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TableData, TableEvent } from 'src/app/shared/models/data';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent {

  @Input() tableConfig!: any[];
  @Input() tableDataList!: TableData[];
  @Output() sortValue = new Subject<TableEvent>();

  // For emitting name of field and sortOrder
  onSort(event: TableEvent) {
    this.sortValue.next({
      name: event?.name,
      sortOrder: event?.sortOrder,
    });
  }
}

import {
  Component,
  ContentChildren,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { TableColumnDirective } from '../../shared/directives/table-column.directive';
import { Subject } from 'rxjs';
import { TableData, TableEvent } from '../../shared/models/data';
import { SortOrder } from '../../shared/models/enum';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss'],
})
export class ContentTableComponent  {
  
  sortStates: { [name: string]: SortOrder } = {};
  sortOrder = SortOrder;

  @Input() tableDataList!: TableData[];
  @Output() onSort = new Subject<TableEvent>();
  @ContentChildren(TableColumnDirective)
  column!: QueryList<TableColumnDirective>;
  
  // For Disabling the button according to their sortOrder
  disableButton(name: string, sortOrder: SortOrder) {
    return this.sortStates[name] === sortOrder;
  }

  // For emitting name of field and sortOrder
  sortTable(event: TableEvent) {
    this.sortStates[event.name] = event.sortOrder;
    this.onSort.next({ name: event.name, sortOrder: event.sortOrder });
  }
}

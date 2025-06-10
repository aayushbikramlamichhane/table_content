import {
  Component,
  ContentChildren,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { TableColumnDirective } from '../../../../../shared/directives/table-column.directive';
import { Subject } from 'rxjs';
import { DataSet, SortEvent } from '../models/table';
import { SortOrder } from '../models/enum';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss'],
})
export class ContentTableComponent {
  sortStates: { [name: string]: SortOrder } = {};
  sortOrder = SortOrder;

  @Input() tableDataList!: DataSet[];
  @Output() onSort = new Subject<SortEvent>();
  @ContentChildren(TableColumnDirective)
  column!: QueryList<TableColumnDirective>;

  // For Disabling the button according to their sortOrder
  disableButton(name: string, sortOrder: SortOrder) {
    return this.sortStates[name] === sortOrder;
  }

  // For emitting name of field and sortOrder
  sortTable(event: SortEvent) {
    this.sortStates[event.name] = event.sortOrder;
    this.onSort.next({ name: event.name, sortOrder: event.sortOrder });
  }
}

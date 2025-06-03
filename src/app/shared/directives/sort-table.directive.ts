import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { TableColumnDirective } from './table-column.directive';
import { SortEvent } from 'src/app/components/shared/models/data';
import { SortOrder } from 'src/app/components/shared/models/enum';

@Directive({
  selector: '[appSortTable]',
})
export class SortTableDirective {
  direction: SortOrder = SortOrder.Descending;

  @Input() tableColumn!: TableColumnDirective;
  @Output() sortChange = new EventEmitter<SortEvent>();

  @HostListener('click')
  click() {
    this.direction =
      this.direction === SortOrder.Descending
        ? SortOrder.Ascending
        : SortOrder.Descending;

    this.sortChange.emit({
      name: this.tableColumn?.name,
      sortOrder: this.direction,
    });
  }
}

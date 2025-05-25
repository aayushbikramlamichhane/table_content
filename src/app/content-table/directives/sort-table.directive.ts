import { Directive, Input, Output, EventEmitter, HostListener } from "@angular/core";
import { TableColumnDirective } from "./table-column.directive";
import { SortOrder } from '../models/enum';
import { TableEvent } from "../models/data";

@Directive({
  selector: '[appSortTable]',
})
export class SortTableDirective {
  @Input() tableColumn!: TableColumnDirective;
  @Output() sortChange = new EventEmitter<TableEvent>();

  sortOrder: boolean = false;

  @HostListener('click')
  click() {
    this.sortOrder = !this.sortOrder;
    this.sortChange.emit({
      name: this.tableColumn?.name,
      sortOrder: this.sortOrder ? SortOrder.Ascending : SortOrder.Descending,
    });
  }
}

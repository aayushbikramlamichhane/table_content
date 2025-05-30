import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ActionEvent,
  DataSet,
  SortEvent,
  ConfigSet,
} from 'src/app/shared/models/data';

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss'],
})
export class TableWrapperComponent {
  @Input() tableConfig!: ConfigSet[];
  @Input() tableDataList!: DataSet[];
  @Output() onSortTriggered = new Subject<SortEvent>();
  @Output() onActionTriggered = new Subject<ActionEvent>();

  // For emitting name of field and sortOrder
  onSort(event: SortEvent) {
    this.onSortTriggered.next({
      name: event?.name,
      sortOrder: event?.sortOrder,
    });
  }
  // for emitting type and id
  onAction(event: ActionEvent) {
    this.onActionTriggered.next({ type: event?.type, id: event?.id });
  }
}

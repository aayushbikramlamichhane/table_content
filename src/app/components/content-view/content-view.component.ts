import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DataSet, SortEvent, TypeEvent } from 'src/app/shared/models/data';
import { action } from 'src/app/shared/models/constants';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent {
  @Input() tableConfig!: any[];
  @Input() tableDataList!: DataSet[];
  @Output() onSortTriggered = new Subject<SortEvent>();
  @Output() onActionTriggered = new Subject<TypeEvent>();
  action = action;

  // For emitting name of field and sortOrder
  onSort(event: SortEvent) {
    this.onSortTriggered.next({
      name: event?.name,
      sortOrder: event?.sortOrder,
    });
  }
  // for emitting type and id
  onActionTrigger(type: string, id: number) {
    this.onActionTriggered.next({ type: type, id: id });
  }

  // for showing the item of menu
  onActionTypeSelect(type: string, id: number) {
    this.onActionTriggered.next({ type: type, id: id });
  }

  // getTableData(value: string | number, dataStyle: any) {
  //   switch (dataStyle.type) {
  //     case 'badge':
  //       `<div class='{{dataStyle.styleClass}}'>{{value}}</div>`;
  //       break;
  //     default:
  //       return value;
  //   }
  // }
}

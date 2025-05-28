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
  dropdownState: { [key: number]: boolean } = {};
  @Input() tableConfig!: any[];
  @Input() tableDataList!: DataSet[];
  @Output() sortValue = new Subject<SortEvent>();
  @Output() typeValue = new Subject<TypeEvent>();
  action = action;

  // For emitting name of field and sortOrder
  onSort(event: SortEvent) {
    this.sortValue.next({
      name: event?.name,
      sortOrder: event?.sortOrder,
    });
  }
  // for emitting type and id
  actionTrigger(type: string, id: number) {
    this.typeValue.next({ type: type, id: id });
  }

  // for showing the item of menu
  toggleMenu(id: number) {
    this.dropdownState[id] = !this.dropdownState[id];
    console.log(this.dropdownState[id]);
  }

}

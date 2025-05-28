import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DataSet, SortEvent, TypeEvent } from 'src/app/shared/models/data';
import { Action } from '../../shared/models/enum';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent {
  @Input() tableConfig!: any[];
  @Input() tableDataList!: DataSet[];
  @Output() sortValue = new Subject<SortEvent>();
  @Output() typeValue = new Subject<TypeEvent>()

  action = Action

  // For emitting name of field and sortOrder
  onSort(event: SortEvent) {
    this.sortValue.next({
      name: event?.name,
      sortOrder: event?.sortOrder,
    });
  }

  // for emitting type and id 
  buttonClicked(type:string,id:number){
    this.typeValue.next({type: type, id:id})
  }

}

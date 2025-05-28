import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DataSet, SortEvent } from 'src/app/shared/models/data';

@Component({
  selector: 'app-content-view-keys',
  templateUrl: './content-view-keys.component.html',
  styleUrls: ['./content-view-keys.component.scss'],
})
export class ContentViewKeysComponent implements OnInit {
  userHeader!: any;
  header!: string[];
  incomeHeader!: any;

  @Input() tableDataList!: DataSet[];
  @Input() userIncome!: any;
  @Input() sortEnable: boolean = false;
  @Output() sortValue = new Subject<SortEvent>();
  ngOnInit(): void {
    // getting keys from tableDataList
    this.header = Object.keys(this.tableDataList[0]);
  }

  // For emitting name of field and sortOrder
  onSort(event: SortEvent) {
    this.sortValue.next({
      name: event?.name,
      sortOrder: event?.sortOrder,
    });
  }
}

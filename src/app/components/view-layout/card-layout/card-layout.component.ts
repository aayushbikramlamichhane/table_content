import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TableColumnDirective } from 'src/app/shared/directives/table-column.directive';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss'],
})
export class CardLayoutComponent {
  @ContentChildren(TableColumnDirective) column!: QueryList<TableColumnDirective>;
  @Input() viewContent!: any;
}

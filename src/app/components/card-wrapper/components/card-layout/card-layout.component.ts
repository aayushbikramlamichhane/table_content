import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CardColumnDirective } from '../shared/directives/card-column.directive';
import { ViewCustomLayer } from '../shared/models/card';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss'],
})
export class CardLayoutComponent {
  @ContentChildren(CardColumnDirective) column!: QueryList<CardColumnDirective>;
  @Input() viewContent!: ViewCustomLayer[];

}

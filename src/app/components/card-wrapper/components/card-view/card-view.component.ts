import {
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { ViewDataSet } from '../shared/models/card';
import { CardColumnDirective } from '../shared/directives/card-column.directive';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  @ContentChildren(CardColumnDirective)
  cardColumn!: QueryList<CardColumnDirective>;
  @Input() viewContent!: ViewDataSet;

}

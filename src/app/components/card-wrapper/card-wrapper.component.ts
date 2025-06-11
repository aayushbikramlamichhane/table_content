import { Component, Input } from '@angular/core';
import { ViewDataSet } from './models/card';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
})
export class CardWrapperComponent {
  @Input() viewContent!: ViewDataSet;
  @Input() viewConfig!: any;

  originalOrder = () => 0;
}

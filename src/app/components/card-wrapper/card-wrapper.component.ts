import { Component, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import {  ViewCustomLayer } from './components/shared/models/card';


@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
})
export class CardWrapperComponent {
  @ViewChild('badgeType') badgeTemplate!: TemplateRef<any>;
  @ViewChild('defaultType') defaultTemplate!: TemplateRef<any>;
  @Input() viewContent!: ViewCustomLayer[];
  @Input() viewConfig!: any;


  getDataStyle(configValue: ViewCustomLayer): TemplateRef<unknown> {
    switch (configValue.dataType) {
      case 'badge':
        return this.badgeTemplate;
      default:
        return this.defaultTemplate;
    }
  }
}

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import {
  ViewDataSet,
  ViewConfigSet,
  ViewCustomLayer,
} from './components/shared/models/card';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
})
export class CardWrapperComponent {
  @ViewChild('badgeType') badgeTemplate!: TemplateRef<unknown>;
  @ViewChild('defaultType') defaultTemplate!: TemplateRef<unknown>;
  @Input() viewContent!: ViewDataSet;
  @Input() viewConfig!: ViewConfigSet;

  isObject(value: any): boolean {
    return typeof value === 'object' ? true : false;
  }

  hasNestedObject(obj: any): boolean {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object') {
        return true;
      }
    }
    return false;
  }



  getTemplateType(configValue: ViewCustomLayer): TemplateRef<unknown> {
    switch (configValue.dataType) {
      case 'badge':
        return this.badgeTemplate;
      default:
        return this.defaultTemplate;
    }
  }
}

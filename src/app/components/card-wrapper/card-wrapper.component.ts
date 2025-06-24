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
  @ViewChild('objectType') objectTemplate!: TemplateRef<unknown>;
  @Input() viewContent!: ViewDataSet;
  @Input() viewConfig!: ViewConfigSet;

  getNestedValue(viewContentKey: string, targetKey: any): string {
    let results!: string;
    const contentKey = this.viewContent[viewContentKey];
    let targetKeyValue: any[] = [];

    if (typeof targetKey === 'string') {
      targetKeyValue?.push(targetKey);
    } else if (typeof targetKey === 'object') {
      for (const key in targetKey) {
        targetKeyValue?.push(targetKey[key]);
      }
    }
    function isObject(obj: any): void {
      if (obj && typeof obj === 'object') {
        for (const key in obj) {
          const val = obj[key];
          for (const targetValue of targetKeyValue) {
            key === targetValue ? (results = val) : isObject(val);
          }
        }
      }
    }
    isObject(contentKey);
    return results;
  }

  getTemplateType(configValue: ViewCustomLayer): TemplateRef<unknown> {
    switch (configValue.dataType) {
      case 'badge':
        return this.badgeTemplate;
      case 'object':
        return this.objectTemplate;
      default:
        return this.defaultTemplate;
    }
  }
}

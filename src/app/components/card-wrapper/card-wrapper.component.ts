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

  getNestedValue(viewContentKey: string, targetKey: any): string[] {
    const results: string[] = [];
    const contentKey = this.viewContent[viewContentKey];
    const targetKeyValues: any[] = [];

    if (typeof targetKey === 'string') {
      targetKeyValues.push(targetKey);
    } else if (typeof targetKey === 'object') {
      for (const key in targetKey) {
        targetKeyValues.push(targetKey[key]);
      }
    }

    function searchNested(obj: any): void {
      if (obj && typeof obj === 'object') {
        for (const key in obj) {
          const val = obj[key];

          for (const target of targetKeyValues) {
            if (key === target && typeof val !== 'object') {
              results.push(val);
            }
          }

          // Only recurse if 'val' is  object
          if (val && typeof val === 'object') {
            searchNested(val);
          }
        }
      }
    }

    searchNested(contentKey);
    return results;
  }

  // getNestedValue(configValueKey: string, targetKey: string): string {
  //   let results!: string;
  //   const base = this.viewContent[configValueKey];

  //   function recurse(obj: any): void {
  //     if (obj && typeof obj === 'object') {
  //       for (const k of Object.keys(obj)) {
  //         const val = obj[k];
  //         if (k === targetKey) {
  //           results = val;
  //         } else if (typeof val === 'object') {
  //           recurse(val);
  //         }
  //       }
  //     }
  //   }
  //   recurse(base);
  //   return results;
  // }

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

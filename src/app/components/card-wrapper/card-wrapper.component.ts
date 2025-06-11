import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import {
  ViewDataSet,
  ViewConfigSet,
  ViewCustomLayer,
} from 'src/app/shared/models/card';

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

  getTemplateType(configValue: ViewCustomLayer): TemplateRef<unknown> {
    switch (configValue.dataType) {
      case 'badge':
        return this.badgeTemplate;
      default:
        return this.defaultTemplate;
    }
  }
}

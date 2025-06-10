import {
  Component,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

import {
  DataSet,
  DataStyle,
  SortEvent,
  ActionEvent,
  ConfigSet,
} from 'src/app/components/models/data';
import { action } from 'src/app/components/models/constants';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent {
  @ViewChild('badgeType') badgeTemplate!: TemplateRef<unknown>;
  @ViewChild('normalType') normalTemplate!: TemplateRef<unknown>;

  @Input() tableConfig!: any[];
  @Input() tableDataList!: DataSet[];
  @Output() onSortTriggered = new Subject<SortEvent>();
  @Output() onActionTriggered = new Subject<ActionEvent>();
  action = action;

  // For emitting name of field and sortOrder
  onSort(event: SortEvent) {
    this.onSortTriggered.next({
      name: event?.name,
      sortOrder: event?.sortOrder,
    });
  }

  // for emitting type and id
  onActionTrigger(type: string, id: number) {
    this.onActionTriggered.next({ type: type, id: id });
  }

  // for showing the item of menu
  onActionTypeSelect(type: string, id: number) {
    this.onActionTriggered.next({ type: type, id: id });
  }

  // for styling of the row based on type
  getTableData(dataStyle: DataStyle): TemplateRef<unknown> {
    switch (dataStyle?.type) {
      case 'badge':
        return this.badgeTemplate;
      default:
        return this.normalTemplate;
    }
  }
}

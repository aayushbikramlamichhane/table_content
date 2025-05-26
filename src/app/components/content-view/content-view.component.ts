import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TableData, TableEvent } from 'src/app/shared/models/data';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent implements OnInit {
  @Input() tableConfig!: any[];
  @Input() tableDataList!: TableData[];
  @Output() sortValue = new Subject<TableEvent>();

  resolvedTableConfig: any[] = [];

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig() {
    // getting keys 
    const objectKeys = Object.keys(this.tableDataList[0]);
    
    // Extracting name from config
    const configNames = this.tableConfig.map((c) => c.name);

    // check for missing configs
    const missingConfigs = objectKeys
      .filter((key) => !configNames.includes(key))
      .map((key) => ({
        header: this.capitalizeFirstLetter(key),
        name: key,
        sortEnable: false,
      }));

    this.resolvedTableConfig = [...this.tableConfig, ...missingConfigs];
  }
  //  function to capitalize the first letter for headers
  private capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // For emitting name of field and sortOrder
  onSort(event: TableEvent) {
    this.sortValue.next({ name: event?.name, sortOrder: event?.sortOrder });
  }
}

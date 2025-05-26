import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ContentTableComponent } from './components/content-table/content-table.component';
import { TableColumnDirective } from './shared/directives/table-column.directive';
import { SortTableDirective } from './shared/directives/sort-table.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentViewComponent } from './components/content-view/content-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTableComponent,
    TableColumnDirective,
    SortTableDirective,
    ContentViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxDatatableModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

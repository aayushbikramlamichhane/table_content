import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentTableComponent } from './components/table-wrapper/components/shared/content-table/content-table.component';
import { TableColumnDirective } from './shared/directives/table-column.directive';
import { SortTableDirective } from './shared/directives/sort-table.directive';
import { ContentViewComponent } from './components/table-wrapper/components/content-view/content-view.component';
import { ContentViewKeysComponent } from './components/table-wrapper/components/content-view-keys/content-view-keys.component';
import { UpperCasePipe } from './shared/pipes/upper-case.pipe';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTableComponent,
    TableColumnDirective,
    SortTableDirective,
    ContentViewComponent,
    ContentViewKeysComponent,
    UpperCasePipe,
    TableWrapperComponent,
    CardWrapperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

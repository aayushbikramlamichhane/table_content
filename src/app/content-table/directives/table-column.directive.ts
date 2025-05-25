import { Directive, Input, TemplateRef } from '@angular/core';


@Directive({
  selector: '[appTableColumn]',
})
export class TableColumnDirective {
  @Input() header!: string;
  @Input() sortEnable: boolean = false;
  @Input() name!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCardColumn]',
})
export class CardColumnDirective {
  @Input() header!: string;
  @Input() name!: string;
  @Input() configValue !: any;

  constructor(public templateRef: TemplateRef<unknown>) {}
}

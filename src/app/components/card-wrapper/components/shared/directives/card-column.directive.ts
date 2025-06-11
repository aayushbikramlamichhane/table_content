import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCardColumn]'
})
export class CardColumnDirective {
  @Input() key !: string;
  @Input() label !: string;

  constructor(public templateRef: TemplateRef<any>) { }

}

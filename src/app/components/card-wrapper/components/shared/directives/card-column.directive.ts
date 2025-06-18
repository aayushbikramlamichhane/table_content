import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCardColumn]',
})
export class CardColumnDirective {
  @Input() key!: string;
  @Input() label!: string;
  @Input() columnSpace!: number;

  constructor(public templateRef: TemplateRef<unknown>) {}
}

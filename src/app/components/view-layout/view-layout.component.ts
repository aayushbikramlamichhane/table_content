import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.scss'],
})
export class ViewLayoutComponent {
  @Input() viewContent!: any;
  @Input() viewConfig!: any;
}

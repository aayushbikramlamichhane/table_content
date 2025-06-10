import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLayoutComponent } from './view-layout.component';

describe('ViewLayoutComponent', () => {
  let component: ViewLayoutComponent;
  let fixture: ComponentFixture<ViewLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLayoutComponent]
    });
    fixture = TestBed.createComponent(ViewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

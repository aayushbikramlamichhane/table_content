import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLayoutComponent } from './card-layout.component';

describe('CardLayoutComponent', () => {
  let component: CardLayoutComponent;
  let fixture: ComponentFixture<CardLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLayoutComponent]
    });
    fixture = TestBed.createComponent(CardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

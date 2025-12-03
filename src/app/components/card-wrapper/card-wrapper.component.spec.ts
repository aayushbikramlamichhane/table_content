import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWrapperComponent } from './card-wrapper.component';

describe('CardWrapperComponent', () => {
  let component: CardWrapperComponent;
  let fixture: ComponentFixture<CardWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardWrapperComponent]
    });
    fixture = TestBed.createComponent(CardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

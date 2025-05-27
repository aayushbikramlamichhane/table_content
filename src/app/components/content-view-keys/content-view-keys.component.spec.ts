import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViewKeysComponent } from './content-view-keys.component';

describe('ContentViewKeysComponent', () => {
  let component: ContentViewKeysComponent;
  let fixture: ComponentFixture<ContentViewKeysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentViewKeysComponent]
    });
    fixture = TestBed.createComponent(ContentViewKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLabelComponent } from './ui-label.component';

describe('UiLabelComponent', () => {
  let component: UiLabelComponent;
  let fixture: ComponentFixture<UiLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

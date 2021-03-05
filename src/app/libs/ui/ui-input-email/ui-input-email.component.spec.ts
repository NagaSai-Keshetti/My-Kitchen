import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputEmailComponent } from './ui-input-email.component';

describe('UiInputEmailComponent', () => {
  let component: UiInputEmailComponent;
  let fixture: ComponentFixture<UiInputEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiInputEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

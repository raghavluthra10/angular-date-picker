import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOneComponent } from './date-one.component';

describe('DateOneComponent', () => {
  let component: DateOneComponent;
  let fixture: ComponentFixture<DateOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

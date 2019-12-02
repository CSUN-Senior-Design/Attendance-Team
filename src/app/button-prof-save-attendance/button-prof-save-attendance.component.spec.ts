import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonProfSaveAttendanceComponent } from './button-prof-save-attendance.component';

describe('ButtonProfSaveAttendanceComponent', () => {
  let component: ButtonProfSaveAttendanceComponent;
  let fixture: ComponentFixture<ButtonProfSaveAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonProfSaveAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonProfSaveAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

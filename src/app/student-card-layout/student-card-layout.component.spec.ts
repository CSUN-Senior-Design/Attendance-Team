import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardLayoutComponent } from './student-card-layout.component';

describe('StudentCardLayoutComponent', () => {
  let component: StudentCardLayoutComponent;
  let fixture: ComponentFixture<StudentCardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

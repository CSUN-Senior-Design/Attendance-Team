import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseCardComponent } from './student-course-card.component';

describe('StudentCourseCardComponent', () => {
  let component: StudentCourseCardComponent;
  let fixture: ComponentFixture<StudentCourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

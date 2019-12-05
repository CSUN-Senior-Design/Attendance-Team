import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseViewCardComponent } from './student-course-view-card.component';

describe('StudentCourseViewCardComponent', () => {
  let component: StudentCourseViewCardComponent;
  let fixture: ComponentFixture<StudentCourseViewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseViewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

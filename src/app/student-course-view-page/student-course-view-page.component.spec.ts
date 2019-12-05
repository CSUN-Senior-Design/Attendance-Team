import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseViewPageComponent } from './student-course-view-page.component';

describe('StudentCourseViewPageComponent', () => {
  let component: StudentCourseViewPageComponent;
  let fixture: ComponentFixture<StudentCourseViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

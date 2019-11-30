import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardCourseViewProfComponent } from './course-card-course-view-prof.component';

describe('CourseCardCourseViewProfComponent', () => {
  let component: CourseCardCourseViewProfComponent;
  let fixture: ComponentFixture<CourseCardCourseViewProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardCourseViewProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardCourseViewProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

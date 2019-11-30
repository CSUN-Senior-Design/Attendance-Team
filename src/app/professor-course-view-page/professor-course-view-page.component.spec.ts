import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCourseViewPageComponent } from './professor-course-view-page.component';

describe('ProfessorCourseViewPageComponent', () => {
  let component: ProfessorCourseViewPageComponent;
  let fixture: ComponentFixture<ProfessorCourseViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorCourseViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCourseViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCourseCardComponent } from './professor-course-card.component';

describe('ProfessorCourseCardComponent', () => {
  let component: ProfessorCourseCardComponent;
  let fixture: ComponentFixture<ProfessorCourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorCourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

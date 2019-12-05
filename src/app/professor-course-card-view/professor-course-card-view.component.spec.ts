import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCourseCardViewComponent } from './professor-course-card-view.component';

describe('PrfoessorCourseCardViewComponent', () => {
  let component: ProfessorCourseCardViewComponent;
  let fixture: ComponentFixture<ProfessorCourseCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorCourseCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCourseCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

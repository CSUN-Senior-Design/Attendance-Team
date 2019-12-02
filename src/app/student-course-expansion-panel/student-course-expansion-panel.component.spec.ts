import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseExpansionPanelComponent } from './student-course-expansion-panel.component';

describe('ProfessorCourseExpansionPanelComponent', () => {
  let component: StudentCourseExpansionPanelComponent;
  let fixture: ComponentFixture<StudentCourseExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

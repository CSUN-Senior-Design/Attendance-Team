import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCourseExpansionPanelComponent } from './professor-course-expansion-panel.component';

describe('ProfessorCourseExpansionPanelComponent', () => {
  let component: ProfessorCourseExpansionPanelComponent;
  let fixture: ComponentFixture<ProfessorCourseExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorCourseExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCourseExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

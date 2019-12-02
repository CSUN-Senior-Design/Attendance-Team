import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorStudentCardComponent } from './professor-student-card.component';

describe('ProfessorStudentCardComponent', () => {
  let component: ProfessorStudentCardComponent;
  let fixture: ComponentFixture<ProfessorStudentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorStudentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorStudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

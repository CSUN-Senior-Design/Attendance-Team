import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorStudentListComponent } from './professor-student-list.component';

describe('ProfessorStudentListComponent', () => {
  let component: ProfessorStudentListComponent;
  let fixture: ComponentFixture<ProfessorStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

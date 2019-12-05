import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCardLayoutComponent } from './professor-card-layout.component';

describe('CardLayoutComponent', () => {
  let component: ProfessorCardLayoutComponent;
  let fixture: ComponentFixture<ProfessorCardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorCardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

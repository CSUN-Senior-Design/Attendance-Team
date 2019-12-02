import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorUserMenuComponent } from './professor-user-menu.component';

describe('ProfessorUserMenuComponent', () => {
  let component: ProfessorUserMenuComponent;
  let fixture: ComponentFixture<ProfessorUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

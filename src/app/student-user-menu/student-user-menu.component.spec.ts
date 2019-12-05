import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUserMenuComponent } from './student-user-menu.component';

describe('StudentUserMenuComponent', () => {
  let component: StudentUserMenuComponent;
  let fixture: ComponentFixture<StudentUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

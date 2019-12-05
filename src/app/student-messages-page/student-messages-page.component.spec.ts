import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMessagesPageComponent } from './student-messages-page.component';

describe('StudentMessagesPageComponent', () => {
  let component: StudentMessagesPageComponent;
  let fixture: ComponentFixture<StudentMessagesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMessagesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMessagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

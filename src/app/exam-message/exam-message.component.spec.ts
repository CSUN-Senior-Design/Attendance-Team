import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamMessageComponent } from './exam-message.component';

describe('ExamMessageComponent', () => {
  let component: ExamMessageComponent;
  let fixture: ComponentFixture<ExamMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

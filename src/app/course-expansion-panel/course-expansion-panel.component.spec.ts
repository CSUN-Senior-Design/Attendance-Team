import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseExpansionPanelComponent } from './course-expansion-panel.component';

describe('CourseExpansionPanelComponent', () => {
  let component: CourseExpansionPanelComponent;
  let fixture: ComponentFixture<CourseExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

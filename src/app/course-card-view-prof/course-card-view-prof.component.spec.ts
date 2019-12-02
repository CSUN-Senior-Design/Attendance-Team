import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardViewProfComponent } from './course-card-view-prof.component';

describe('CourseCardViewProfComponent', () => {
  let component: CourseCardViewProfComponent;
  let fixture: ComponentFixture<CourseCardViewProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardViewProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardViewProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

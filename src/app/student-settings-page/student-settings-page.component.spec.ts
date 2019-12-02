import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSettingsPageComponent } from './student-settings-page.component';

describe('StudentSettingsPageComponent', () => {
  let component: StudentSettingsPageComponent;
  let fixture: ComponentFixture<StudentSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

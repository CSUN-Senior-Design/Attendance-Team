import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSettingsPageComponent } from './professor-settings-page.component';

describe('ProfessorSettingsPageComponent', () => {
  let component: ProfessorSettingsPageComponent;
  let fixture: ComponentFixture<ProfessorSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

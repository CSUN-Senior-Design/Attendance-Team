import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCodeGeneratorComponent } from './button-code-generator.component';

describe('ButtonCodeGeneratorComponent', () => {
  let component: ButtonCodeGeneratorComponent;
  let fixture: ComponentFixture<ButtonCodeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCodeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

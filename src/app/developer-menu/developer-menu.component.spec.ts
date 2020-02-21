import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperMenuComponent } from './developer-menu.component';

describe('DeveloperMenuComponent', () => {
  let component: DeveloperMenuComponent;
  let fixture: ComponentFixture<DeveloperMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

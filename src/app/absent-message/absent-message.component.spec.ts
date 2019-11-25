import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentMessageComponent } from './absent-message.component';

describe('AbsentMessageComponent', () => {
  let component: AbsentMessageComponent;
  let fixture: ComponentFixture<AbsentMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsentMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1pp04Component } from './c1pp04.component';

describe('C1pp04Component', () => {
  let component: C1pp04Component;
  let fixture: ComponentFixture<C1pp04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1pp04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1pp04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

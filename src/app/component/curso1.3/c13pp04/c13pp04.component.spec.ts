import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp04Component } from './c13pp04.component';

describe('C13pp04Component', () => {
  let component: C13pp04Component;
  let fixture: ComponentFixture<C13pp04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

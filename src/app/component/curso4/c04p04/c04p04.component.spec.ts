import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04p04Component } from './c04p04.component';

describe('C04p04Component', () => {
  let component: C04p04Component;
  let fixture: ComponentFixture<C04p04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04p04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04p04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

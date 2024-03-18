import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p04Component } from './c02p04.component';

describe('C02p04Component', () => {
  let component: C02p04Component;
  let fixture: ComponentFixture<C02p04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

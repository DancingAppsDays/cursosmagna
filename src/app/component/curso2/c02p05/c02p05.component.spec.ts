import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p05Component } from './c02p05.component';

describe('C02p05Component', () => {
  let component: C02p05Component;
  let fixture: ComponentFixture<C02p05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

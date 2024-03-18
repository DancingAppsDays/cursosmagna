import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p10Component } from './c02p10.component';

describe('C02p10Component', () => {
  let component: C02p10Component;
  let fixture: ComponentFixture<C02p10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

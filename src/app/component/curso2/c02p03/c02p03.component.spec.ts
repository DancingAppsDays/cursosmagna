import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p03Component } from './c02p03.component';

describe('C02p03Component', () => {
  let component: C02p03Component;
  let fixture: ComponentFixture<C02p03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

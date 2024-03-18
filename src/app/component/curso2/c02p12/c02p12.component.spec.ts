import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p12Component } from './c02p12.component';

describe('C02p12Component', () => {
  let component: C02p12Component;
  let fixture: ComponentFixture<C02p12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

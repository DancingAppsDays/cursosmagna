import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p11Component } from './c02p11.component';

describe('C02p11Component', () => {
  let component: C02p11Component;
  let fixture: ComponentFixture<C02p11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

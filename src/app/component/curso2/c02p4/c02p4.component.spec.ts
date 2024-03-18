import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p4Component } from './c02p4.component';

describe('C02p4Component', () => {
  let component: C02p4Component;
  let fixture: ComponentFixture<C02p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

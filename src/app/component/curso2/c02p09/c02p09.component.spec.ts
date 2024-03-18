import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p09Component } from './c02p09.component';

describe('C02p09Component', () => {
  let component: C02p09Component;
  let fixture: ComponentFixture<C02p09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

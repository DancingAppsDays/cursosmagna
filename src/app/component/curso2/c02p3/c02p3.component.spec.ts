import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p3Component } from './c02p3.component';

describe('C02p3Component', () => {
  let component: C02p3Component;
  let fixture: ComponentFixture<C02p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

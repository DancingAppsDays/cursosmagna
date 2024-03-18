import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p1Component } from './c02p1.component';

describe('C02p1Component', () => {
  let component: C02p1Component;
  let fixture: ComponentFixture<C02p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

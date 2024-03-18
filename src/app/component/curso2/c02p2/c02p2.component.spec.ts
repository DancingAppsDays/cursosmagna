import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p2Component } from './c02p2.component';

describe('C02p2Component', () => {
  let component: C02p2Component;
  let fixture: ComponentFixture<C02p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

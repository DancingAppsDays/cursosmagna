import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02f1Component } from './c02f1.component';

describe('C02f1Component', () => {
  let component: C02f1Component;
  let fixture: ComponentFixture<C02f1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02f1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02f1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

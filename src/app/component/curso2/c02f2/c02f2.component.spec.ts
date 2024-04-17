import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02f2Component } from './c02f2.component';

describe('C02f2Component', () => {
  let component: C02f2Component;
  let fixture: ComponentFixture<C02f2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02f2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02f2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02f3Component } from './c02f3.component';

describe('C02f3Component', () => {
  let component: C02f3Component;
  let fixture: ComponentFixture<C02f3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02f3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02f3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

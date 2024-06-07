import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02f222Component } from './c02f222.component';

describe('C02f222Component', () => {
  let component: C02f222Component;
  let fixture: ComponentFixture<C02f222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02f222Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02f222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

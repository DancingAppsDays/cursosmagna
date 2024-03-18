import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p08Component } from './c02p08.component';

describe('C02p08Component', () => {
  let component: C02p08Component;
  let fixture: ComponentFixture<C02p08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

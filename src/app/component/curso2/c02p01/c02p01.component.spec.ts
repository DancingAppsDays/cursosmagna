import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p01Component } from './c02p01.component';

describe('C02p01Component', () => {
  let component: C02p01Component;
  let fixture: ComponentFixture<C02p01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

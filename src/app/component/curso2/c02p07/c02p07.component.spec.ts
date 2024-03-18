import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p07Component } from './c02p07.component';

describe('C02p07Component', () => {
  let component: C02p07Component;
  let fixture: ComponentFixture<C02p07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p02Component } from './c02p02.component';

describe('C02p02Component', () => {
  let component: C02p02Component;
  let fixture: ComponentFixture<C02p02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

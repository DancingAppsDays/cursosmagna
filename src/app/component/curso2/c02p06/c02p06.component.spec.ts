import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p06Component } from './c02p06.component';

describe('C02p06Component', () => {
  let component: C02p06Component;
  let fixture: ComponentFixture<C02p06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03pf1Component } from './c03pf1.component';

describe('C03pf1Component', () => {
  let component: C03pf1Component;
  let fixture: ComponentFixture<C03pf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03pf1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03pf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

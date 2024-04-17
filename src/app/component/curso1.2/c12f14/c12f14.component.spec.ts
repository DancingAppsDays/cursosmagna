import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f14Component } from './c12f14.component';

describe('C12f14Component', () => {
  let component: C12f14Component;
  let fixture: ComponentFixture<C12f14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f11Component } from './c12f11.component';

describe('C12f11Component', () => {
  let component: C12f11Component;
  let fixture: ComponentFixture<C12f11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

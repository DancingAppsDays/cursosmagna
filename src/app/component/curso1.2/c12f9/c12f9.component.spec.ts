import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f9Component } from './c12f9.component';

describe('C12f9Component', () => {
  let component: C12f9Component;
  let fixture: ComponentFixture<C12f9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

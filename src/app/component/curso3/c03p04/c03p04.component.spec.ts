import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p04Component } from './c03p04.component';

describe('C03p04Component', () => {
  let component: C03p04Component;
  let fixture: ComponentFixture<C03p04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

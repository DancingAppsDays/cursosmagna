import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f15Component } from './c12f15.component';

describe('C12f15Component', () => {
  let component: C12f15Component;
  let fixture: ComponentFixture<C12f15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

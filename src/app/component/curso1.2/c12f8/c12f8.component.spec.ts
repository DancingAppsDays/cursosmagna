import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f8Component } from './c12f8.component';

describe('C12f8Component', () => {
  let component: C12f8Component;
  let fixture: ComponentFixture<C12f8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p8Component } from './c1p8.component';

describe('C1p8Component', () => {
  let component: C1p8Component;
  let fixture: ComponentFixture<C1p8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1p8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1p8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

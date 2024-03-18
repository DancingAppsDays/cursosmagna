import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p6Component } from './c1p6.component';

describe('C1p6Component', () => {
  let component: C1p6Component;
  let fixture: ComponentFixture<C1p6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1p6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1p6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p3Component } from './c1p3.component';

describe('C1p3Component', () => {
  let component: C1p3Component;
  let fixture: ComponentFixture<C1p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1p3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

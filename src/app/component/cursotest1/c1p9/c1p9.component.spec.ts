import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p9Component } from './c1p9.component';

describe('C1p9Component', () => {
  let component: C1p9Component;
  let fixture: ComponentFixture<C1p9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1p9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1p9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

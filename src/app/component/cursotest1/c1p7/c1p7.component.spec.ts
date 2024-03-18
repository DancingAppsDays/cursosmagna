import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p7Component } from './c1p7.component';

describe('C1p7Component', () => {
  let component: C1p7Component;
  let fixture: ComponentFixture<C1p7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1p7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1p7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

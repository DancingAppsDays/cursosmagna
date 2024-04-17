import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f1Component } from './c12f1.component';

describe('C12f1Component', () => {
  let component: C12f1Component;
  let fixture: ComponentFixture<C12f1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

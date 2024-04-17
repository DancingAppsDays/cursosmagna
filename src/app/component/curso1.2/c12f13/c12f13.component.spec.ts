import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f13Component } from './c12f13.component';

describe('C12f13Component', () => {
  let component: C12f13Component;
  let fixture: ComponentFixture<C12f13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

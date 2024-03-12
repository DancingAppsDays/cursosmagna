import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13p1Component } from './c13p1.component';

describe('C13p1Component', () => {
  let component: C13p1Component;
  let fixture: ComponentFixture<C13p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13p1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

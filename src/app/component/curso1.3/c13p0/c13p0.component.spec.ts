import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13p0Component } from './c13p0.component';

describe('C13p0Component', () => {
  let component: C13p0Component;
  let fixture: ComponentFixture<C13p0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13p0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13p0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

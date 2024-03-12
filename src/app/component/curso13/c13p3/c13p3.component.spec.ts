import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13p3Component } from './c13p3.component';

describe('C13p3Component', () => {
  let component: C13p3Component;
  let fixture: ComponentFixture<C13p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13p3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

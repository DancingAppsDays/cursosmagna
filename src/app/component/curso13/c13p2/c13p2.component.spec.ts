import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13p2Component } from './c13p2.component';

describe('C13p2Component', () => {
  let component: C13p2Component;
  let fixture: ComponentFixture<C13p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13p2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

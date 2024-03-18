import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp1Component } from './c13pp1.component';

describe('C13pp1Component', () => {
  let component: C13pp1Component;
  let fixture: ComponentFixture<C13pp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

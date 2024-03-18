import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp1Component } from './c14pp1.component';

describe('C14pp1Component', () => {
  let component: C14pp1Component;
  let fixture: ComponentFixture<C14pp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

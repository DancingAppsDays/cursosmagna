import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp9Component } from './c14pp9.component';

describe('C14pp9Component', () => {
  let component: C14pp9Component;
  let fixture: ComponentFixture<C14pp9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

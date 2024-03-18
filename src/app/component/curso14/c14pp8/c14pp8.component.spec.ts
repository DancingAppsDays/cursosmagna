import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp8Component } from './c14pp8.component';

describe('C14pp8Component', () => {
  let component: C14pp8Component;
  let fixture: ComponentFixture<C14pp8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

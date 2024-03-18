import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp6Component } from './c14pp6.component';

describe('C14pp6Component', () => {
  let component: C14pp6Component;
  let fixture: ComponentFixture<C14pp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

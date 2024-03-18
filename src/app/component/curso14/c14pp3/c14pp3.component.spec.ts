import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp3Component } from './c14pp3.component';

describe('C14pp3Component', () => {
  let component: C14pp3Component;
  let fixture: ComponentFixture<C14pp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

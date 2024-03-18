import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp7Component } from './c14pp7.component';

describe('C14pp7Component', () => {
  let component: C14pp7Component;
  let fixture: ComponentFixture<C14pp7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

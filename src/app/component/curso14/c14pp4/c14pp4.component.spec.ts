import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp4Component } from './c14pp4.component';

describe('C14pp4Component', () => {
  let component: C14pp4Component;
  let fixture: ComponentFixture<C14pp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

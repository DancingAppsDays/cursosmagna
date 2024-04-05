import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp10Component } from './c14pp10.component';

describe('C14pp10Component', () => {
  let component: C14pp10Component;
  let fixture: ComponentFixture<C14pp10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f6Component } from './c12f6.component';

describe('C12f6Component', () => {
  let component: C12f6Component;
  let fixture: ComponentFixture<C12f6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

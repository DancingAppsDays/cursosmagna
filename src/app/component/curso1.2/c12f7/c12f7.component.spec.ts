import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f7Component } from './c12f7.component';

describe('C12f7Component', () => {
  let component: C12f7Component;
  let fixture: ComponentFixture<C12f7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

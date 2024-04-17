import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f10Component } from './c12f10.component';

describe('C12f10Component', () => {
  let component: C12f10Component;
  let fixture: ComponentFixture<C12f10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

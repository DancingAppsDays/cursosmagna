import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f12Component } from './c12f12.component';

describe('C12f12Component', () => {
  let component: C12f12Component;
  let fixture: ComponentFixture<C12f12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

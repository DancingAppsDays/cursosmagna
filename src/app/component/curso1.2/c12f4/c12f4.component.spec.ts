import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f4Component } from './c12f4.component';

describe('C12f4Component', () => {
  let component: C12f4Component;
  let fixture: ComponentFixture<C12f4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

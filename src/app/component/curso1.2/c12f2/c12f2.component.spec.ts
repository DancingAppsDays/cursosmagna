import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f2Component } from './c12f2.component';

describe('C12f2Component', () => {
  let component: C12f2Component;
  let fixture: ComponentFixture<C12f2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

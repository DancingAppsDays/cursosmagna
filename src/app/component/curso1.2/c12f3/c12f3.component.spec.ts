import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f3Component } from './c12f3.component';

describe('C12f3Component', () => {
  let component: C12f3Component;
  let fixture: ComponentFixture<C12f3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

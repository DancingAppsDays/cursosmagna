import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p4Component } from './c1p4.component';

describe('C1p4Component', () => {
  let component: C1p4Component;
  let fixture: ComponentFixture<C1p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1p4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

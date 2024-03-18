import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p03Component } from './c03p03.component';

describe('C03p03Component', () => {
  let component: C03p03Component;
  let fixture: ComponentFixture<C03p03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

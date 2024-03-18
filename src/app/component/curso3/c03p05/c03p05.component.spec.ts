import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p05Component } from './c03p05.component';

describe('C03p05Component', () => {
  let component: C03p05Component;
  let fixture: ComponentFixture<C03p05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

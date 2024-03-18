import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p09Component } from './c03p09.component';

describe('C03p09Component', () => {
  let component: C03p09Component;
  let fixture: ComponentFixture<C03p09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

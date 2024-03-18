import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p10Component } from './c03p10.component';

describe('C03p10Component', () => {
  let component: C03p10Component;
  let fixture: ComponentFixture<C03p10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

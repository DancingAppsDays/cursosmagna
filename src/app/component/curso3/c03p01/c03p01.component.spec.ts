import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p01Component } from './c03p01.component';

describe('C03p01Component', () => {
  let component: C03p01Component;
  let fixture: ComponentFixture<C03p01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

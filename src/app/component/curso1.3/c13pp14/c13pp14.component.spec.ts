import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp14Component } from './c13pp14.component';

describe('C13pp14Component', () => {
  let component: C13pp14Component;
  let fixture: ComponentFixture<C13pp14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

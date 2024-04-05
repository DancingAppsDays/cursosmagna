import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04p01Component } from './c04p01.component';

describe('C04p01Component', () => {
  let component: C04p01Component;
  let fixture: ComponentFixture<C04p01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04p01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04p01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04p05Component } from './c04p05.component';

describe('C04p05Component', () => {
  let component: C04p05Component;
  let fixture: ComponentFixture<C04p05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04p05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04p05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

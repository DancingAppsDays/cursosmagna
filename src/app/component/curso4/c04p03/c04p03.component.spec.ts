import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04p03Component } from './c04p03.component';

describe('C04p03Component', () => {
  let component: C04p03Component;
  let fixture: ComponentFixture<C04p03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04p03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04p03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

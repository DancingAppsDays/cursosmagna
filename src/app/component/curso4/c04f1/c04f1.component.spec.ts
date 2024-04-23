import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04f1Component } from './c04f1.component';

describe('C04f1Component', () => {
  let component: C04f1Component;
  let fixture: ComponentFixture<C04f1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04f1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04f1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

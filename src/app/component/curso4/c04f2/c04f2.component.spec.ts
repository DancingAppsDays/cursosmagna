import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04f2Component } from './c04f2.component';

describe('C04f2Component', () => {
  let component: C04f2Component;
  let fixture: ComponentFixture<C04f2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04f2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04f2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

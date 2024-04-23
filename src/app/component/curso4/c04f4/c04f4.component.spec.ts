import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04f4Component } from './c04f4.component';

describe('C04f4Component', () => {
  let component: C04f4Component;
  let fixture: ComponentFixture<C04f4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04f4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04f4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

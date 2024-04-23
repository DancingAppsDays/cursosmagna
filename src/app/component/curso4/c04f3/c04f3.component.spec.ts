import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04f3Component } from './c04f3.component';

describe('C04f3Component', () => {
  let component: C04f3Component;
  let fixture: ComponentFixture<C04f3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04f3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04f3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

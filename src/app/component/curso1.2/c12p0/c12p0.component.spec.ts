import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12p0Component } from './c12p0.component';

describe('C12p0Component', () => {
  let component: C12p0Component;
  let fixture: ComponentFixture<C12p0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12p0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12p0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12p1Component } from './c12p1.component';

describe('C12p1Component', () => {
  let component: C12p1Component;
  let fixture: ComponentFixture<C12p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12p1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

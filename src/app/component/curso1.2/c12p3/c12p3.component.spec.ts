import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12p3Component } from './c12p3.component';

describe('C12p3Component', () => {
  let component: C12p3Component;
  let fixture: ComponentFixture<C12p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12p3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

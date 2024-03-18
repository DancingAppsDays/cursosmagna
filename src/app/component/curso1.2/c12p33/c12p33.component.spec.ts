import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12p33Component } from './c12p33.component';

describe('C12p33Component', () => {
  let component: C12p33Component;
  let fixture: ComponentFixture<C12p33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12p33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12p33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

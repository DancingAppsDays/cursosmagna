import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1pp05Component } from './c1pp05.component';

describe('C1pp05Component', () => {
  let component: C1pp05Component;
  let fixture: ComponentFixture<C1pp05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1pp05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1pp05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp05Component } from './c13pp05.component';

describe('C13pp05Component', () => {
  let component: C13pp05Component;
  let fixture: ComponentFixture<C13pp05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp11Component } from './c13pp11.component';

describe('C13pp11Component', () => {
  let component: C13pp11Component;
  let fixture: ComponentFixture<C13pp11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

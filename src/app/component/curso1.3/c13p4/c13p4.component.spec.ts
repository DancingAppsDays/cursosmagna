import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13p4Component } from './c13p4.component';

describe('C13p4Component', () => {
  let component: C13p4Component;
  let fixture: ComponentFixture<C13p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13p4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

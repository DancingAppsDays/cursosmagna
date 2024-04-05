import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp12Component } from './c13pp12.component';

describe('C13pp12Component', () => {
  let component: C13pp12Component;
  let fixture: ComponentFixture<C13pp12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

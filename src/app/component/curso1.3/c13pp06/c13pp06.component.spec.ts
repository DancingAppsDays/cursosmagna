import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp06Component } from './c13pp06.component';

describe('C13pp06Component', () => {
  let component: C13pp06Component;
  let fixture: ComponentFixture<C13pp06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

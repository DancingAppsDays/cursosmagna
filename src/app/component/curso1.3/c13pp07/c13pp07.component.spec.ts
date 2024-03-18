import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp07Component } from './c13pp07.component';

describe('C13pp07Component', () => {
  let component: C13pp07Component;
  let fixture: ComponentFixture<C13pp07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

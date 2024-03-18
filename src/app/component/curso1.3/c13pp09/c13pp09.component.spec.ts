import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp09Component } from './c13pp09.component';

describe('C13pp09Component', () => {
  let component: C13pp09Component;
  let fixture: ComponentFixture<C13pp09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

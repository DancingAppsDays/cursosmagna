import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp10Component } from './c13pp10.component';

describe('C13pp10Component', () => {
  let component: C13pp10Component;
  let fixture: ComponentFixture<C13pp10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp13Component } from './c13pp13.component';

describe('C13pp13Component', () => {
  let component: C13pp13Component;
  let fixture: ComponentFixture<C13pp13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

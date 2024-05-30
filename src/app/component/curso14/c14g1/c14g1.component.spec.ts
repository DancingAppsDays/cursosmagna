import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14g1Component } from './c14g1.component';

describe('C14g1Component', () => {
  let component: C14g1Component;
  let fixture: ComponentFixture<C14g1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14g1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14g1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

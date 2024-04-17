import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13f1Component } from './c13f1.component';

describe('C13f1Component', () => {
  let component: C13f1Component;
  let fixture: ComponentFixture<C13f1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13f1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13f1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

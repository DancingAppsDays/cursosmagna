import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1pp01Component } from './c1pp01.component';

describe('C1pp01Component', () => {
  let component: C1pp01Component;
  let fixture: ComponentFixture<C1pp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1pp01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1pp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

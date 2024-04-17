import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1pp03Component } from './c1pp03.component';

describe('C1pp03Component', () => {
  let component: C1pp03Component;
  let fixture: ComponentFixture<C1pp03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1pp03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1pp03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

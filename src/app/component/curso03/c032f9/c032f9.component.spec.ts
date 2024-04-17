import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032f9Component } from './c032f9.component';

describe('C032f9Component', () => {
  let component: C032f9Component;
  let fixture: ComponentFixture<C032f9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032f9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032f9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032f6Component } from './c032f6.component';

describe('C032f6Component', () => {
  let component: C032f6Component;
  let fixture: ComponentFixture<C032f6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032f6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032f6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

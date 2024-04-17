import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032f7Component } from './c032f7.component';

describe('C032f7Component', () => {
  let component: C032f7Component;
  let fixture: ComponentFixture<C032f7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032f7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032f7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

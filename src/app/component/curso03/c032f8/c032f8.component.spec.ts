import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032f8Component } from './c032f8.component';

describe('C032f8Component', () => {
  let component: C032f8Component;
  let fixture: ComponentFixture<C032f8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032f8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032f8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032f3Component } from './c032f3.component';

describe('C032f3Component', () => {
  let component: C032f3Component;
  let fixture: ComponentFixture<C032f3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032f3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032f3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

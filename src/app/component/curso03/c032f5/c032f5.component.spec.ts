import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032f5Component } from './c032f5.component';

describe('C032f5Component', () => {
  let component: C032f5Component;
  let fixture: ComponentFixture<C032f5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032f5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032f5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

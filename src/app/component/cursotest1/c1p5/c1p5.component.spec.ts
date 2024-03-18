import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p5Component } from './c1p5.component';

describe('C1p5Component', () => {
  let component: C1p5Component;
  let fixture: ComponentFixture<C1p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1p5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

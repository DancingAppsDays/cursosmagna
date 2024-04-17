import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12f5Component } from './c12f5.component';

describe('C12f5Component', () => {
  let component: C12f5Component;
  let fixture: ComponentFixture<C12f5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12f5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12f5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

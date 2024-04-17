import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13f5Component } from './c13f5.component';

describe('C13f5Component', () => {
  let component: C13f5Component;
  let fixture: ComponentFixture<C13f5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13f5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13f5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13f3Component } from './c13f3.component';

describe('C13f3Component', () => {
  let component: C13f3Component;
  let fixture: ComponentFixture<C13f3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13f3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13f3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

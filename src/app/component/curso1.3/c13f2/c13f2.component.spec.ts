import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13f2Component } from './c13f2.component';

describe('C13f2Component', () => {
  let component: C13f2Component;
  let fixture: ComponentFixture<C13f2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13f2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13f2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

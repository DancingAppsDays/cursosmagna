import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C042p03Component } from './c042p03.component';

describe('C042p03Component', () => {
  let component: C042p03Component;
  let fixture: ComponentFixture<C042p03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C042p03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C042p03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

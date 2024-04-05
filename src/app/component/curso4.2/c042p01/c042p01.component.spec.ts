import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C042p01Component } from './c042p01.component';

describe('C042p01Component', () => {
  let component: C042p01Component;
  let fixture: ComponentFixture<C042p01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C042p01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C042p01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

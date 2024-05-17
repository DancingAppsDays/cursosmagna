import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1test7Component } from './c1test7.component';

describe('C1test7Component', () => {
  let component: C1test7Component;
  let fixture: ComponentFixture<C1test7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1test7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1test7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

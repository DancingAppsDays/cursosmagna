import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13f4Component } from './c13f4.component';

describe('C13f4Component', () => {
  let component: C13f4Component;
  let fixture: ComponentFixture<C13f4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13f4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13f4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

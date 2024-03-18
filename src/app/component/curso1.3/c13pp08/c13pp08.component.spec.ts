import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp08Component } from './c13pp08.component';

describe('C13pp08Component', () => {
  let component: C13pp08Component;
  let fixture: ComponentFixture<C13pp08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

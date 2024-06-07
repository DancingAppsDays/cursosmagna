import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14g4Component } from './c14g4.component';

describe('C14g4Component', () => {
  let component: C14g4Component;
  let fixture: ComponentFixture<C14g4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14g4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14g4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

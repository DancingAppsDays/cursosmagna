import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp2Component } from './c14pp2.component';

describe('C14pp2Component', () => {
  let component: C14pp2Component;
  let fixture: ComponentFixture<C14pp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp03Component } from './c13pp03.component';

describe('C13pp03Component', () => {
  let component: C13pp03Component;
  let fixture: ComponentFixture<C13pp03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

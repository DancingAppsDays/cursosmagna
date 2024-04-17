import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14f8Component } from './c14f8.component';

describe('C14f8Component', () => {
  let component: C14f8Component;
  let fixture: ComponentFixture<C14f8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14f8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14f8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

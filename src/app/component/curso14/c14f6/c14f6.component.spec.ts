import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14f6Component } from './c14f6.component';

describe('C14f6Component', () => {
  let component: C14f6Component;
  let fixture: ComponentFixture<C14f6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14f6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14f6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

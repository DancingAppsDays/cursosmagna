import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14f7Component } from './c14f7.component';

describe('C14f7Component', () => {
  let component: C14f7Component;
  let fixture: ComponentFixture<C14f7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14f7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14f7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

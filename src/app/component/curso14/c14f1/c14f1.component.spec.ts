import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14f1Component } from './c14f1.component';

describe('C14f1Component', () => {
  let component: C14f1Component;
  let fixture: ComponentFixture<C14f1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14f1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14f1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

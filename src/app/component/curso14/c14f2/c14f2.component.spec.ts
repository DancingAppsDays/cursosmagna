import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14f2Component } from './c14f2.component';

describe('C14f2Component', () => {
  let component: C14f2Component;
  let fixture: ComponentFixture<C14f2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14f2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14f2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

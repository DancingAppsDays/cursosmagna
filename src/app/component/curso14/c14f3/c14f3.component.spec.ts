import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14f3Component } from './c14f3.component';

describe('C14f3Component', () => {
  let component: C14f3Component;
  let fixture: ComponentFixture<C14f3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14f3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14f3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

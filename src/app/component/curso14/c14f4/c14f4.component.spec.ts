import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14f4Component } from './c14f4.component';

describe('C14f4Component', () => {
  let component: C14f4Component;
  let fixture: ComponentFixture<C14f4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14f4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14f4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12p4Component } from './c12p4.component';

describe('C12p4Component', () => {
  let component: C12p4Component;
  let fixture: ComponentFixture<C12p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12p4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

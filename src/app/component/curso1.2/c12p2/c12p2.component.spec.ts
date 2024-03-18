import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12p2Component } from './c12p2.component';

describe('C12p2Component', () => {
  let component: C12p2Component;
  let fixture: ComponentFixture<C12p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12p2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

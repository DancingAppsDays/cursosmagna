import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14p3Component } from './c14p3.component';

describe('C14p3Component', () => {
  let component: C14p3Component;
  let fixture: ComponentFixture<C14p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14p3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

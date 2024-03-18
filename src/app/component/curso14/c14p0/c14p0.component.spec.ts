import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14p0Component } from './c14p0.component';

describe('C14p0Component', () => {
  let component: C14p0Component;
  let fixture: ComponentFixture<C14p0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14p0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14p0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

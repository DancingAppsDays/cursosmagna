import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14p1Component } from './c14p1.component';

describe('C14p1Component', () => {
  let component: C14p1Component;
  let fixture: ComponentFixture<C14p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14p1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

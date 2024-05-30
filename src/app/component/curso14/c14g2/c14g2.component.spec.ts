import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14g2Component } from './c14g2.component';

describe('C14g2Component', () => {
  let component: C14g2Component;
  let fixture: ComponentFixture<C14g2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14g2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14g2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

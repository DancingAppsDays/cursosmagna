import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14g3Component } from './c14g3.component';

describe('C14g3Component', () => {
  let component: C14g3Component;
  let fixture: ComponentFixture<C14g3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14g3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14g3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

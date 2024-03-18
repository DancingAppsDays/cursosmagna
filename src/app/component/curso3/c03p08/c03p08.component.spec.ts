import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p08Component } from './c03p08.component';

describe('C03p08Component', () => {
  let component: C03p08Component;
  let fixture: ComponentFixture<C03p08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

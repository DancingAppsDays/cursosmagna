import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p07Component } from './c03p07.component';

describe('C03p07Component', () => {
  let component: C03p07Component;
  let fixture: ComponentFixture<C03p07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

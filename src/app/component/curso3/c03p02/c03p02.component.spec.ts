import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p02Component } from './c03p02.component';

describe('C03p02Component', () => {
  let component: C03p02Component;
  let fixture: ComponentFixture<C03p02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

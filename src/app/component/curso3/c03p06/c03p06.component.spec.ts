import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03p06Component } from './c03p06.component';

describe('C03p06Component', () => {
  let component: C03p06Component;
  let fixture: ComponentFixture<C03p06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03p06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03p06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

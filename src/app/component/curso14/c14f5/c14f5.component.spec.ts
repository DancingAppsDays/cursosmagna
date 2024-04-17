import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14f5Component } from './c14f5.component';

describe('C14f5Component', () => {
  let component: C14f5Component;
  let fixture: ComponentFixture<C14f5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14f5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14f5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp5Component } from './c14pp5.component';

describe('C14pp5Component', () => {
  let component: C14pp5Component;
  let fixture: ComponentFixture<C14pp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

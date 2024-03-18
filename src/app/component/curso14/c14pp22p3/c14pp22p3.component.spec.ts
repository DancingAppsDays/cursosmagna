import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp22p3Component } from './c14pp22p3.component';

describe('C14pp22p3Component', () => {
  let component: C14pp22p3Component;
  let fixture: ComponentFixture<C14pp22p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp22p3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp22p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

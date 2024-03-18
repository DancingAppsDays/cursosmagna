import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp22p2Component } from './c14pp22p2.component';

describe('C14pp22p2Component', () => {
  let component: C14pp22p2Component;
  let fixture: ComponentFixture<C14pp22p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp22p2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp22p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14p2Component } from './c14p2.component';

describe('C14p2Component', () => {
  let component: C14p2Component;
  let fixture: ComponentFixture<C14p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14p2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

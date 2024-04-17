import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032f4Component } from './c032f4.component';

describe('C032f4Component', () => {
  let component: C032f4Component;
  let fixture: ComponentFixture<C032f4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032f4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032f4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

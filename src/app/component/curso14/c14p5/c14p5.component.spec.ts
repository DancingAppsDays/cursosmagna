import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14p5Component } from './c14p5.component';

describe('C14p5Component', () => {
  let component: C14p5Component;
  let fixture: ComponentFixture<C14p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14p5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

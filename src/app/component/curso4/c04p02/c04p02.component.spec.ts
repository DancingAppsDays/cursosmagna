import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04p02Component } from './c04p02.component';

describe('C04p02Component', () => {
  let component: C04p02Component;
  let fixture: ComponentFixture<C04p02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04p02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04p02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

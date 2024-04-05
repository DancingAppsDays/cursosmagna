import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C042p02Component } from './c042p02.component';

describe('C042p02Component', () => {
  let component: C042p02Component;
  let fixture: ComponentFixture<C042p02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C042p02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C042p02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

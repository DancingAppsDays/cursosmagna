import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso13Component } from './curso13.component';

describe('Curso13Component', () => {
  let component: Curso13Component;
  let fixture: ComponentFixture<Curso13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

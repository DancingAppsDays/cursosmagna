import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5pp1Component } from './curso5pp1.component';

describe('Curso5pp1Component', () => {
  let component: Curso5pp1Component;
  let fixture: ComponentFixture<Curso5pp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5pp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5pp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

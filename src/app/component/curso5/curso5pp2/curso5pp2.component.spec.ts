import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5pp2Component } from './curso5pp2.component';

describe('Curso5pp2Component', () => {
  let component: Curso5pp2Component;
  let fixture: ComponentFixture<Curso5pp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5pp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5pp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5f2Component } from './curso5f2.component';

describe('Curso5f2Component', () => {
  let component: Curso5f2Component;
  let fixture: ComponentFixture<Curso5f2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5f2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5f2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

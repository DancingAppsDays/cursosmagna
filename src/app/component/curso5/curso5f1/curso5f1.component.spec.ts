import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5f1Component } from './curso5f1.component';

describe('Curso5f1Component', () => {
  let component: Curso5f1Component;
  let fixture: ComponentFixture<Curso5f1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5f1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5f1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

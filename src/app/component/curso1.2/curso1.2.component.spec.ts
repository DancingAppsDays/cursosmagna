import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso12Component } from './curso1.2.component';

describe('Curso12Component', () => {
  let component: Curso12Component;
  let fixture: ComponentFixture<Curso12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

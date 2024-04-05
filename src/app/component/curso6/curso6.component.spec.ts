import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6Component } from './curso6.component';

describe('Curso6Component', () => {
  let component: Curso6Component;
  let fixture: ComponentFixture<Curso6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

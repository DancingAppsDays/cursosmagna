import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6pp1Component } from './curso6pp1.component';

describe('Curso6pp1Component', () => {
  let component: Curso6pp1Component;
  let fixture: ComponentFixture<Curso6pp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6pp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6pp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6pp2Component } from './curso6pp2.component';

describe('Curso6pp2Component', () => {
  let component: Curso6pp2Component;
  let fixture: ComponentFixture<Curso6pp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6pp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6pp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

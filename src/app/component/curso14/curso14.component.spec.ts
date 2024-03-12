import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso14Component } from './curso14.component';

describe('Curso14Component', () => {
  let component: Curso14Component;
  let fixture: ComponentFixture<Curso14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

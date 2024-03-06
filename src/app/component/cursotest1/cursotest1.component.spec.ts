import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursotest1Component } from './cursotest1.component';

describe('Cursotest1Component', () => {
  let component: Cursotest1Component;
  let fixture: ComponentFixture<Cursotest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cursotest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cursotest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

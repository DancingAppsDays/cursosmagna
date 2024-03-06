import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso1Component } from './curso1.component';

describe('Curso1Component', () => {
  let component: Curso1Component;
  let fixture: ComponentFixture<Curso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

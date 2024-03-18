import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso3Component } from './curso3.component';

describe('Curso3Component', () => {
  let component: Curso3Component;
  let fixture: ComponentFixture<Curso3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

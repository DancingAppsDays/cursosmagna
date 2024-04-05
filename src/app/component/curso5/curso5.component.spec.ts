import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5Component } from './curso5.component';

describe('Curso5Component', () => {
  let component: Curso5Component;
  let fixture: ComponentFixture<Curso5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

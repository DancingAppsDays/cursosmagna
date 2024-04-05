import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso03Component } from './curso03.component';

describe('Curso03Component', () => {
  let component: Curso03Component;
  let fixture: ComponentFixture<Curso03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

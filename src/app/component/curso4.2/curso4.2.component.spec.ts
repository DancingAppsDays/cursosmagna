import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso42Component } from './curso4.2.component';

describe('Curso42Component', () => {
  let component: Curso42Component;
  let fixture: ComponentFixture<Curso42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso42Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

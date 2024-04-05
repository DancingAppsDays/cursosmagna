import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso4Component } from './curso4.component';

describe('Curso4Component', () => {
  let component: Curso4Component;
  let fixture: ComponentFixture<Curso4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

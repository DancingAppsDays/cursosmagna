import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6pp001Component } from './curso6pp001.component';

describe('Curso6pp001Component', () => {
  let component: Curso6pp001Component;
  let fixture: ComponentFixture<Curso6pp001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6pp001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6pp001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

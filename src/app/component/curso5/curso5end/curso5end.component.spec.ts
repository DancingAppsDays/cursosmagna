import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5endComponent } from './curso5end.component';

describe('Curso5endComponent', () => {
  let component: Curso5endComponent;
  let fixture: ComponentFixture<Curso5endComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5endComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

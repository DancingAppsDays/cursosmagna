import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5cComponent } from './curso5c.component';

describe('Curso5cComponent', () => {
  let component: Curso5cComponent;
  let fixture: ComponentFixture<Curso5cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

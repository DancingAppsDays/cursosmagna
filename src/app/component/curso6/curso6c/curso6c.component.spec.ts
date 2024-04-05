import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6cComponent } from './curso6c.component';

describe('Curso6cComponent', () => {
  let component: Curso6cComponent;
  let fixture: ComponentFixture<Curso6cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

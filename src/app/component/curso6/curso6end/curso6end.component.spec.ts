import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6endComponent } from './curso6end.component';

describe('Curso6endComponent', () => {
  let component: Curso6endComponent;
  let fixture: ComponentFixture<Curso6endComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6endComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

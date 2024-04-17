import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6descComponent } from './curso6desc.component';

describe('Curso6descComponent', () => {
  let component: Curso6descComponent;
  let fixture: ComponentFixture<Curso6descComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6descComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6descComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

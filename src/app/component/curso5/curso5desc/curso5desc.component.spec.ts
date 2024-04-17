import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5descComponent } from './curso5desc.component';

describe('Curso5descComponent', () => {
  let component: Curso5descComponent;
  let fixture: ComponentFixture<Curso5descComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5descComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5descComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

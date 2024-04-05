import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6introComponent } from './curso6intro.component';

describe('Curso6introComponent', () => {
  let component: Curso6introComponent;
  let fixture: ComponentFixture<Curso6introComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6introComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6introComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5introComponent } from './curso5intro.component';

describe('Curso5introComponent', () => {
  let component: Curso5introComponent;
  let fixture: ComponentFixture<Curso5introComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5introComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5introComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

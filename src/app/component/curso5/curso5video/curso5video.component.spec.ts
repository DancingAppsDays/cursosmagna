import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso5videoComponent } from './curso5video.component';

describe('Curso5videoComponent', () => {
  let component: Curso5videoComponent;
  let fixture: ComponentFixture<Curso5videoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso5videoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso5videoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

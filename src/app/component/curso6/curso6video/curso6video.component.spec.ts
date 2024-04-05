import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso6videoComponent } from './curso6video.component';

describe('Curso6videoComponent', () => {
  let component: Curso6videoComponent;
  let fixture: ComponentFixture<Curso6videoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Curso6videoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Curso6videoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

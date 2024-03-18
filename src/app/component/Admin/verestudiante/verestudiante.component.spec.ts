import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerestudianteComponent } from './verestudiante.component';

describe('VerestudianteComponent', () => {
  let component: VerestudianteComponent;
  let fixture: ComponentFixture<VerestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

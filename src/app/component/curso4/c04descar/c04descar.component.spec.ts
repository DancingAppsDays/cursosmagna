import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04descarComponent } from './c04descar.component';

describe('C04descarComponent', () => {
  let component: C04descarComponent;
  let fixture: ComponentFixture<C04descarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04descarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04descarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

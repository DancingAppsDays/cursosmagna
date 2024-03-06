import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastProgressComponent } from './toast-progress.component';

describe('ToastProgressComponent', () => {
  let component: ToastProgressComponent;
  let fixture: ComponentFixture<ToastProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

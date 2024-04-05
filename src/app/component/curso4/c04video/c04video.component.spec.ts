import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04videoComponent } from './c04video.component';

describe('C04videoComponent', () => {
  let component: C04videoComponent;
  let fixture: ComponentFixture<C04videoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04videoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04videoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

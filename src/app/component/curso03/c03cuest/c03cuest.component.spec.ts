import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03cuestComponent } from './c03cuest.component';

describe('C03cuestComponent', () => {
  let component: C03cuestComponent;
  let fixture: ComponentFixture<C03cuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03cuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03cuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

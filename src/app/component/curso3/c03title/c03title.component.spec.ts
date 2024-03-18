import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03titleComponent } from './c03title.component';

describe('C03titleComponent', () => {
  let component: C03titleComponent;
  let fixture: ComponentFixture<C03titleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03titleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03titleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

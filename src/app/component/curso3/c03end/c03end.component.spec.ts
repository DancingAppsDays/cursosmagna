import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03endComponent } from './c03end.component';

describe('C03endComponent', () => {
  let component: C03endComponent;
  let fixture: ComponentFixture<C03endComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03endComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

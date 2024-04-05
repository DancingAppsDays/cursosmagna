import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04introComponent } from './c04intro.component';

describe('C04introComponent', () => {
  let component: C04introComponent;
  let fixture: ComponentFixture<C04introComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04introComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04introComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

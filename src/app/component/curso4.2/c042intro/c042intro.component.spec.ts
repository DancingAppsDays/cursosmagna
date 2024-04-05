import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C042introComponent } from './c042intro.component';

describe('C042introComponent', () => {
  let component: C042introComponent;
  let fixture: ComponentFixture<C042introComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C042introComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C042introComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p5cComponent } from './c02p5c.component';

describe('C02p5cComponent', () => {
  let component: C02p5cComponent;
  let fixture: ComponentFixture<C02p5cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p5cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p5cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

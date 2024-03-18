import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02p6endComponent } from './c02p6end.component';

describe('C02p6endComponent', () => {
  let component: C02p6endComponent;
  let fixture: ComponentFixture<C02p6endComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02p6endComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02p6endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

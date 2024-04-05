import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C042CComponent } from './c042-c.component';

describe('C042CComponent', () => {
  let component: C042CComponent;
  let fixture: ComponentFixture<C042CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C042CComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C042CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

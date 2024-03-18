import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03descaComponent } from './c03desca.component';

describe('C03descaComponent', () => {
  let component: C03descaComponent;
  let fixture: ComponentFixture<C03descaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03descaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03descaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C03vidComponent } from './c03vid.component';

describe('C03vidComponent', () => {
  let component: C03vidComponent;
  let fixture: ComponentFixture<C03vidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C03vidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C03vidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

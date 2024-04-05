import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C042vidComponent } from './c042vid.component';

describe('C042vidComponent', () => {
  let component: C042vidComponent;
  let fixture: ComponentFixture<C042vidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C042vidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C042vidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

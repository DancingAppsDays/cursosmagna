import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C042endComponent } from './c042end.component';

describe('C042endComponent', () => {
  let component: C042endComponent;
  let fixture: ComponentFixture<C042endComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C042endComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C042endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

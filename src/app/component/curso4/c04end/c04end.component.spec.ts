import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C04endComponent } from './c04end.component';

describe('C04endComponent', () => {
  let component: C04endComponent;
  let fixture: ComponentFixture<C04endComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C04endComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C04endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

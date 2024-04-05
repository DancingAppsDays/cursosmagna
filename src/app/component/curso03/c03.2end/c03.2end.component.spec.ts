import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032endComponent } from './c03.2end.component';

describe('C032endComponent', () => {
  let component: C032endComponent;
  let fixture: ComponentFixture<C032endComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032endComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032endComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

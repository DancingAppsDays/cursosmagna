import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032vidComponent } from './c03.2vid.component';

describe('C032vidComponent', () => {
  let component: C032vidComponent;
  let fixture: ComponentFixture<C032vidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032vidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032vidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C032titleComponent } from './c03.2title.component';

describe('C032titleComponent', () => {
  let component: C032titleComponent;
  let fixture: ComponentFixture<C032titleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C032titleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C032titleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

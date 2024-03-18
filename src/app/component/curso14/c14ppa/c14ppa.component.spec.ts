import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14ppaComponent } from './c14ppa.component';

describe('C14ppaComponent', () => {
  let component: C14ppaComponent;
  let fixture: ComponentFixture<C14ppaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14ppaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14ppaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14pp1preComponent } from './c14pp1pre.component';

describe('C14pp1preComponent', () => {
  let component: C14pp1preComponent;
  let fixture: ComponentFixture<C14pp1preComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14pp1preComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14pp1preComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

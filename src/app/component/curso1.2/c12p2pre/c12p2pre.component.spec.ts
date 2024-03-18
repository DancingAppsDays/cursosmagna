import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12p2preComponent } from './c12p2pre.component';

describe('C12p2preComponent', () => {
  let component: C12p2preComponent;
  let fixture: ComponentFixture<C12p2preComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12p2preComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12p2preComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

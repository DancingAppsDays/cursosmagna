import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14p4cComponent } from './c14p4c.component';

describe('C14p4cComponent', () => {
  let component: C14p4cComponent;
  let fixture: ComponentFixture<C14p4cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14p4cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C14p4cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

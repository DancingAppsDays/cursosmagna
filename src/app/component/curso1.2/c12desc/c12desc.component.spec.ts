import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C12descComponent } from './c12desc.component';

describe('C12descComponent', () => {
  let component: C12descComponent;
  let fixture: ComponentFixture<C12descComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C12descComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C12descComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

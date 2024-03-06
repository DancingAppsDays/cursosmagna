import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtesterComponent } from './addtester.component';

describe('AddtesterComponent', () => {
  let component: AddtesterComponent;
  let fixture: ComponentFixture<AddtesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

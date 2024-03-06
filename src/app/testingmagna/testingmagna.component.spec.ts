import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingmagnaComponent } from './testingmagna.component';

describe('TestingmagnaComponent', () => {
  let component: TestingmagnaComponent;
  let fixture: ComponentFixture<TestingmagnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingmagnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingmagnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

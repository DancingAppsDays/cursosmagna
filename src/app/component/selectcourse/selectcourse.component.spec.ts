import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcourseComponent } from './selectcourse.component';

describe('SelectcourseComponent', () => {
  let component: SelectcourseComponent;
  let fixture: ComponentFixture<SelectcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

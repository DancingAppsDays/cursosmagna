import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro11Component } from './intro11.component';

describe('Intro11Component', () => {
  let component: Intro11Component;
  let fixture: ComponentFixture<Intro11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

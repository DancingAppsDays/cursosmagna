import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro13Component } from './intro13.component';

describe('Intro13Component', () => {
  let component: Intro13Component;
  let fixture: ComponentFixture<Intro13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

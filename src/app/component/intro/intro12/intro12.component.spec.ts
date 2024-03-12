import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro12Component } from './intro12.component';

describe('Intro12Component', () => {
  let component: Intro12Component;
  let fixture: ComponentFixture<Intro12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

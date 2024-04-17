import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1pp02Component } from './c1pp02.component';

describe('C1pp02Component', () => {
  let component: C1pp02Component;
  let fixture: ComponentFixture<C1pp02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1pp02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1pp02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

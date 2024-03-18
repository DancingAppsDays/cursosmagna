import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C13pp02Component } from './c13pp02.component';

describe('C13pp02Component', () => {
  let component: C13pp02Component;
  let fixture: ComponentFixture<C13pp02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C13pp02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C13pp02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

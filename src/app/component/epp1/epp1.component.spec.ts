import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epp1Component } from './epp1.component';

describe('Epp1Component', () => {
  let component: Epp1Component;
  let fixture: ComponentFixture<Epp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Epp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Epp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

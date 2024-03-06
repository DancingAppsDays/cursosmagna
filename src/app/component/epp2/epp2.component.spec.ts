import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Epp2Component } from './epp2.component';

describe('Epp2Component', () => {
  let component: Epp2Component;
  let fixture: ComponentFixture<Epp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Epp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Epp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

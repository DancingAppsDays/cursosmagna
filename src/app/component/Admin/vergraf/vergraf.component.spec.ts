import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VergrafComponent } from './vergraf.component';

describe('VergrafComponent', () => {
  let component: VergrafComponent;
  let fixture: ComponentFixture<VergrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VergrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VergrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

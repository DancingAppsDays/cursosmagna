import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5cuestComponent } from './page5cuest.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('Page5cuestComponent', () => {
  let component: Page5cuestComponent;
  let fixture: ComponentFixture<Page5cuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page5cuestComponent ],
      imports: [ReactiveFormsModule],  // Also add it to 'imports' array
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page5cuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

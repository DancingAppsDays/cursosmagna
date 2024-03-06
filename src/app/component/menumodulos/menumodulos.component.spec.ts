import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumodulosComponent } from './menumodulos.component';

describe('MenumodulosComponent', () => {
  let component: MenumodulosComponent;
  let fixture: ComponentFixture<MenumodulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumodulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenumodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

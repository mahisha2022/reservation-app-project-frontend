import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemInputComponent } from './menu-item-input.component';

describe('MenuItemInputComponent', () => {
  let component: MenuItemInputComponent;
  let fixture: ComponentFixture<MenuItemInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

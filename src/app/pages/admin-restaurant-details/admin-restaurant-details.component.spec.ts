import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestaurantDetailsComponent } from './admin-restaurant-details.component';

describe('AdminRestaurantDetailsComponent', () => {
  let component: AdminRestaurantDetailsComponent;
  let fixture: ComponentFixture<AdminRestaurantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestaurantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRestaurantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

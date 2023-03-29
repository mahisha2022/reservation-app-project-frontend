import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurantform',
  templateUrl: './restaurantform.component.html',
  styleUrls: ['./restaurantform.component.css']
})
export class RestaurantformComponent implements OnInit{
  restaurants: Restaurant[] = [];
  username: string = "";
  password: string = "";
  name: string = "";
  address: string = "";
  phone: string = "";
  openAt: string = "";
  closeAt: string = "";
  totalSeats: number = 0;

  constructor(private restaurantService: RestaurantService){}
  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurant()
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      });
  }

  submit(): void{
    let restaurant: Restaurant = {
      userName: this.username, password: this.password,
      restaurantName: this.name, address: this.address, phone: this.phone, 
      openAt: this.openAt, closeAt: this.closeAt, totalSeats: this.totalSeats
    };
    this.restaurantService.postRestaurant(restaurant).subscribe();
  }

}

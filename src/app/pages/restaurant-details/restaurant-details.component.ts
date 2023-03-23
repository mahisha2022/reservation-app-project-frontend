import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent {

  /**
   * Member Variables
   */

  selectedRestaurant : Restaurant = {
    userId : 0,
    userName : "test username",
    password : "test password",
    restaurantId : 0,
    restaurantName : "Test Restaurant"
  }
  availableReservations : Reservation[] = [
    {
      reservationId : 0,
      userId : 0,
      restaurantId : 0,
      time : "5:00 PM"
    },
    {
      reservationId : 0,
      userId : 0,
      restaurantId : 0,
      time : "5:30 PM"
    },
    {
      reservationId : 0,
      userId : 0,
      restaurantId : 0,
      time : "6:00 PM"
    },
    {
      reservationId : 0,
      userId : 0,
      restaurantId : 0,
      time : "6:30 PM"
    }
  ];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */



}

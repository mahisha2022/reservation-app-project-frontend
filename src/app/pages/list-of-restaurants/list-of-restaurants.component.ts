import { Component } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-list-of-restaurants',
  templateUrl: './list-of-restaurants.component.html',
  styleUrls: ['./list-of-restaurants.component.css']
})
export class ListOfRestaurantsComponent {

  /**
   * Member Variables
   */

  restaurants : Restaurant[] = [
    {
      address: "test address",
      phone: "989-111-1111",
      openAt: "11:00AM",
      closeAt: "10:00PM",
      totalSeats: 100,
      userName : "test username",
      password : "test password",
      restaurantName : "Test Restaurant"
    },
    {
      address: "test address",
      phone: "989-111-1111",
      openAt: "11:00AM",
      closeAt: "10:00PM",
      totalSeats: 100,
      userName : "test username",
      password : "test password",
      restaurantName : "Test Restaurant 2"
    },
    {
      address: "test address",
      phone: "989-111-1111",
      openAt: "11:00AM",
      closeAt: "10:00PM",
      totalSeats: 100,
      userName : "test username",
      password : "test password",
      restaurantName : "Test Restaurant 3"
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

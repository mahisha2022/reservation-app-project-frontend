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
    userId : 0,
    userName : "test username",
    password : "test password",
    restaurantId : 0,
    restaurantName : "Test Restaurant"
    },
    {
      userId : 0,
      userName : "test username",
      password : "test password",
      restaurantId : 0,
      restaurantName : "Test Restaurant 2"
      },
      {
        userId : 0,
        userName : "test username",
        password : "test password",
        restaurantId : 0,
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

import { Component } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { CustomerService } from 'src/app/services/customer.service';
import { RestaurantService } from 'src/app/services/user-auth';

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
      username : "test username",
      passwd : "test password",
      name : "Test Restaurant",
      reservations: []
    },
    {
      address: "test address",
      phone: "989-111-1111",
      openAt: "11:00AM",
      closeAt: "10:00PM",
      totalSeats: 100,
      username : "test username",
      passwd : "test password",
      name : "Test Restaurant 2",
      reservations: []
    },
    {
      address: "test address",
      phone: "989-111-1111",
      openAt: "11:00AM",
      closeAt: "10:00PM",
      totalSeats: 100,
      username : "test username",
      passwd : "test password",
      name : "Test Restaurant 3",
      reservations: []
    }
  ];



  /**
   * Constructor
   */

  constructor(private restaurantService: RestaurantService) { }



  /**
   * Class Methods
   */
  ///Listen to the added restaurant from the signup component 
    onRestaurantAdded(newRestaurant: Restaurant){this.restaurants.push(newRestaurant)}


}

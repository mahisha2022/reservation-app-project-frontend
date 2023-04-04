import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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

  restaurants : Restaurant[] = [ ];



  /**
   * Constructor
   */

  constructor(private restaurantService: RestaurantService, 
    private router: Router, 
    private route:ActivatedRoute) { }



  /**
   * Class Methods
   */

  ngOnInit() {
    
  }

  ///Listen to the added restaurant from the signup component 
  onRestaurantAdded(newRestaurant: Restaurant) {
    this.restaurants.push(newRestaurant);
  }

  transitionToRestaurantDetails(restaurant:Restaurant) {
    const navigationExtras: NavigationExtras = {
      
      queryParams: {
        id: this.route.snapshot.queryParamMap.get('id'),
        restaurantId: restaurant.id!
      }
    }
    this.router.navigate(["/restaurantDetails"], navigationExtras);
  }

}

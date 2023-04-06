import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

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
    private route:ActivatedRoute) { 

      restaurantService.getRestaurant().subscribe(restaurants => {

        if (restaurants != null) {

          this.restaurants = restaurants as Restaurant[];

        }

      })

    }



  /**
   * Class Methods
   */

  ngOnInit() { }

  transitionToRestaurantDetails(restaurant:Restaurant) {

    const navigationExtras: NavigationExtras = {
      
      queryParams: {
        id: this.route.snapshot.queryParamMap.get('id'),
        restaurantId: restaurant.id!
      }
    }
    this.router.navigate(["/restaurantDetails"], navigationExtras);

  }

  transitionToListOfRestaurants(transition : boolean) {

    const navigationExtras: NavigationExtras = {
      
      queryParams: {
        id: this.route.snapshot.queryParamMap.get('id')
      }
    }
    this.router.navigate(["/listOfRestaurants"], navigationExtras);

  }

  transitionToMyReservations(transition : boolean) {

    const navigationExtras: NavigationExtras = {
      
      queryParams: {
        id: this.route.snapshot.queryParamMap.get('id')
      }
    }
    this.router.navigate(["/myReservations"], navigationExtras);

  }

}

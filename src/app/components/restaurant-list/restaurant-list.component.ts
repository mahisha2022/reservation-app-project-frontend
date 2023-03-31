import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {

  /**
   * Member Variables
   */

  // @Input()
  restaurants : Restaurant[] = [];

  inputValue: string;

  /**
   * Constructor
   */

  constructor(public restaurantService: RestaurantService) {this.inputValue = this.restaurantService.inputValue }



  /**
   * Class Methods
   */

  ngOnInit() : void {this.getAddedRestaurant() };

  

  getAddedRestaurant(){
    this.restaurantService.getRestaurant().subscribe(json=>{this.restaurants=json})
  }

  // getAddedRestaurant(newRestaurant: Restaurant){
  //   this.restaurants.push(newRestaurant);
  // }
}

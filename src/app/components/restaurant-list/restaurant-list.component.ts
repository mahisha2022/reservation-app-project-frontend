import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  transitionToDetailsEvent = new EventEmitter<Restaurant>();
  @Input()
  userId : number = -1;
  restaurants : Restaurant[] = [];



  /**
   * Constructor
   */

  constructor(public restaurantService: RestaurantService) { }



  /**
   * Class Methods
   */

  ngOnInit() : void {

    this.getAddedRestaurant();

  }

  transitionToDetails(restaurant:Restaurant) {

    this.transitionToDetailsEvent.emit(restaurant);

  }

  getAddedRestaurant() {

    this.restaurantService.getRestaurant().subscribe(json=> {
      this.restaurants=json
    });

  }

}

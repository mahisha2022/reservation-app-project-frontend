import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  /**
   * Member Variables
   */

  @Input()
  restaurant : Restaurant = {
    restaurantId : 0, 
    restaurantName : "", 
    userId : 0, 
    userName : "", 
    password : ""
  };



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

}

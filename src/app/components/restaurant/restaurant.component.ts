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
    userId : 0, 
    username : "", 
    passwd : "",
    name : "", 
    address : "",
    phone : "",
    totalSeats : 0,
    reservations : []
  };



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

}

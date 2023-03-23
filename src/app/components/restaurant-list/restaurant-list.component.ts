import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {

  /**
   * Member Variables
   */

  @Input()
  restaurants : Restaurant[] = [];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  ngOnInit() : void { }

}

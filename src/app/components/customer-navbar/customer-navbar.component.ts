import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {

  /**
   * Member Variables
   */

  @Output()
  transitionToListOfRestaurants = new EventEmitter<boolean>();
  @Output()
  transitionToMyReservations = new EventEmitter<boolean>();



  /**
   * Class Methods
   */

  listOfRestaurantsClicked() : void {
    this.transitionToListOfRestaurants.emit(true);
  }

  myReservationsClicked() : void {
    this.transitionToMyReservations.emit(true);
  }

}

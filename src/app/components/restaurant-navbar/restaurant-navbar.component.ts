import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-navbar',
  templateUrl: './restaurant-navbar.component.html',
  styleUrls: ['./restaurant-navbar.component.css']
})
export class RestaurantNavbarComponent {

  /**
   * Member Variables
   */

  @Output()
  transitionToCurrentReservations = new EventEmitter<boolean>();
  @Output()
  transitionToAdminDetails = new EventEmitter<boolean>();



  /**
   * Class Methods
   */

  currentReservationsButtonClicked() : void {
    this.transitionToCurrentReservations.emit(true);
  }

  adminDetailsButtonClicked() : void {
    this.transitionToAdminDetails.emit(true);
  }

}

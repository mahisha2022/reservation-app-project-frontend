import { Component, Input } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  /**
   * Member Variables
   */

  @Input()
  reservation : Reservation = {
    userId: 0,
    restaurantId: 0,
    reservationDate: "05/29/2020",
    specialAccomodation: "None",
    guestNum: 0
  };



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

}

import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent {

  /**
   * Member Variables
   */

  reservations : Reservation[] = [
    {
      reservationId : 0,
      userId : 0,
      restaurantId : 0,
      time : "5:00 PM"
    },
    {
      reservationId : 0,
      userId : 0,
      restaurantId : 0,
      time : "5:30 PM"
    },
    {
      reservationId : 0,
      userId : 0,
      restaurantId : 0,
      time : "6:00 PM"
    },
    {
      reservationId : 0,
      userId : 0,
      restaurantId : 0,
      time : "6:30 PM"
    }
];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */



}

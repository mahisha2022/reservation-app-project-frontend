import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-current-reservations',
  templateUrl: './current-reservations.component.html',
  styleUrls: ['./current-reservations.component.css']
})
export class CurrentReservationsComponent {

  /**
   * Member Variables
   */
  
  currentReservations : Reservation[] = [ ];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

}

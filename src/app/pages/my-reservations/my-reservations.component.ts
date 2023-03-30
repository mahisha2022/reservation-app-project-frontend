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

  reservations : Reservation[] = [ ];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */



}

import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsAppServiceService } from 'src/app/services/reservations.service';

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

  constructor(private reservationService: ReservationsAppServiceService) { 

    this.reservationService.getCustomerReseravtiont()

  }



  /**
   * Class Methods
   */

}

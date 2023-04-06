import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { CustomerService } from 'src/app/services/customer.service';
import { ReservationsAppServiceService } from 'src/app/services/reservations.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

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

  constructor(private reservationService : ReservationsAppServiceService,
    private restaurantService : RestaurantService) {
    
    reservationService.getRestaurantReseravtiont().subscribe(reservations => {

      if (reservations != null) {

        this.currentReservations = reservations as Reservation[];

      }

    });

  }



  /**
   * Class Methods
   */

}

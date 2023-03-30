import { Component } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { Restaurant } from 'src/app/models/Restaurant';
import { ReservationsAppServiceService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent {

  /**
   * Member Variables
   */

  selectedRestaurant : Restaurant = {
    address: "test address",
    phone: "989-111-1111",
    openAt: "11:00AM",
    closeAt: "10:00PM",
    totalSeats: 100,
    username : "test username",
    passwd : "test password",
    name : "Test Restaurant",
    reservations: []
  }
  availableReservations : Reservation[] = [];



  /**
   * Constructor
   */

  constructor(private reservationService: ReservationsAppServiceService) { }



  /**
   * Class Methods
   */

  reservationMade(reservation: Reservation) {
    reservation.restaurantId = this.selectedRestaurant.userId!;
    this.reservationService.postReservation(reservation).subscribe();
  }

}

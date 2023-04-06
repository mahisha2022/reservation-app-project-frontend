import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
  
  restaurantId : number = -1;
  currentReservations : Reservation[] = [ ];



  /**
   * Constructor
   */

  constructor(private reservationService : ReservationsAppServiceService,
    private restaurantService : RestaurantService,
    private route:ActivatedRoute,
    private router: Router) {
    
    this.getRestaurantId();

  }



  /**
   * Class Methods
   */

  getRestaurantId() : void {

    const restId = this.route.snapshot.queryParamMap.get('id');
    if (restId != null) {
      let numTest: number = +restId;
      if (numTest != null) {
        this.restaurantId = numTest;
        this.getRestaurantReservations();
      } else {
        this.restaurantId = -1;
      }
    } else {
      this.restaurantId = -1;
    }

  }

  getRestaurantReservations() : void {

    this.reservationService.getRestaurantReseravtiont(this.restaurantId).subscribe(reservations => {

      if (reservations != null) {

        this.currentReservations = reservations as Reservation[];

      }

    });

  }

  transitionToAdminDetails(transition : boolean) {

    const navigationExtras: NavigationExtras = {
      
      queryParams: {
        id: this.route.snapshot.queryParamMap.get('id')
      }
    }
    this.router.navigate(["/listOfRestaurants"], navigationExtras);

  }

  transitionToCurrentReservations(transition : boolean) {

    const navigationExtras: NavigationExtras = {
      
      queryParams: {
        id: this.route.snapshot.queryParamMap.get('id')
      }
    }
    this.router.navigate(["/myReservations"], navigationExtras);

  }

}

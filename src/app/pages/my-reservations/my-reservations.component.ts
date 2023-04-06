import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { CustomerService } from 'src/app/services/customer.service';
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

  userId : number = -1;
  reservations : Reservation[] = [ ];



  /**
   * Constructor
   */

  constructor(private reservationService: ReservationsAppServiceService,
    private customerService: CustomerService,
    private route:ActivatedRoute,
    private router: Router) { 

      this.getUserId();

  }



  /**
   * Class Methods
   */

  getUserId() : void {

    const userId = this.route.snapshot.queryParamMap.get('id');
    if (userId != null) {
      let numTest: number = +userId;
      if (numTest != null) {
        this.userId = numTest;
        this.getCustomerReservations();
      } else {
        this.userId = -1;
      }
    } else {
      this.userId = -1;
    }

  }

  getCustomerReservations() : void {

    this.reservationService.getCustomerReseravtiont(this.userId).subscribe(reservations => {

      this.reservations = reservations as Reservation[];

    });

  }

  transitionToListOfRestaurants(transition : boolean) {

    const navigationExtras: NavigationExtras = {
      
      queryParams: {
        id: this.route.snapshot.queryParamMap.get('id')
      }
    }
    this.router.navigate(["/listOfRestaurants"], navigationExtras);

  }

  transitionToMyReservations(transition : boolean) {

    const navigationExtras: NavigationExtras = {
      
      queryParams: {
        id: this.route.snapshot.queryParamMap.get('id')
      }
    }
    this.router.navigate(["/myReservations"], navigationExtras);

  }

}

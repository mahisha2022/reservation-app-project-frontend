import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Reservation } from 'src/app/models/Reservation';
import { Restaurant } from 'src/app/models/Restaurant';
import { CustomerService } from 'src/app/services/customer.service';
import { ReservationsAppServiceService } from 'src/app/services/reservations.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent {

  /**
   * Member Variables
   */

  currentUser : Customer = {
    reservations: [],
    username: '',
    passwd: ''
  }
  userId : number = -1;
  selectedRestaurant : Restaurant = {
    address: "test address",
    phone: "989-111-1111",
    openAt: "11:00AM",
    closeAt: "10:00PM",
    totalSeats: 100,
    username : "test username",
    passwd : "test password",
    name : "",
    reservations: []
  }
  availableReservations : Reservation[] = [];



  /**
   * Constructor
   */

  constructor(private reservationService: ReservationsAppServiceService,
    private restaurantService: RestaurantService,
    private customerService : CustomerService,
    private route:ActivatedRoute,
    private router: Router) { 

      this.getUserId();
      this.getSelectedRestaurant();

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
        this.getCurrentUserData(this.userId);
      } else {
        this.userId = -1;
      }
    } else {
      this.userId = -1;
    }

  }

  getSelectedRestaurant() : void {

    const paramId = this.route.snapshot.queryParamMap.get('restaurantId');
    if (paramId != null) {
      const id : number = +paramId;
      if (id != null) {
        this.restaurantService.getRestaurantById(id).subscribe(
          restaurant => {
            this.selectedRestaurant = restaurant;
          })
      }
    }

  }

  getCurrentUserData(id : number) : void {

    this.customerService.getCustomerById(id).subscribe(foundUser => {

      if (foundUser != null) {
        this.currentUser = foundUser as Customer;
      }

    });

  }

  postReservation(reservation: Reservation) {

    reservation.userId = this.userId;
    reservation.restaurantId = this.selectedRestaurant.id!;
    reservation.name = this.currentUser.username;
    console.log(reservation);
    this.reservationService.postReservation(reservation).subscribe(newReservation => {

      if (newReservation != null) {

        alert("Reservation Created!");

      }
      
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

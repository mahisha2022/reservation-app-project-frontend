import { Component, Input } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsAppServiceService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  @Input()
  reservations : Reservation[] = [];



  constructor(private reservationService: ReservationsAppServiceService) { }


  ngOnInit() : void { this.reservationListForACustomer();}



 reservationListForARestaurant(){this.reservationService.getRestaurantReseravtiont().subscribe()}

 reservationListForACustomer(){this.reservationService.getCustomerReseravtiont().subscribe()}



}

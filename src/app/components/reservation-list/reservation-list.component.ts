import { Component, Input } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsAppServiceService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  /**
   * Member Variables
   */

  @Input()
  reservations : Reservation[] = [];



  /**
   * Constructor
   */

  constructor(private reservationService: ReservationsAppServiceService) { }



  /**
   * Class Methods
   */

  ngOnInit() : void { }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation-input',
  templateUrl: './reservation-input.component.html',
  styleUrls: ['./reservation-input.component.css']
})
export class ReservationInputComponent implements OnInit{
   
  /**
   * Member Variables
   */

  @Output()
  reservationMadeEvent = new EventEmitter<Reservation>();
  reservationDate:string = "";
  guestNum:number = 0;
  specialAccomodation: string = "";



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  ngOnInit(): void {}
    
  submit(): void{
    let reservation: Reservation = {
      reservationDate: this.reservationDate, 
      specialAccomodation: this.specialAccomodation, 
      userId: -1, 
      restaurantId: -1,
      reservationId: -1
    };
    this.reservationMadeEvent.emit(reservation);
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Reservation } from 'src/app/models/Reservation';
import { CustomerService } from 'src/app/services/customer.service';
import { ReservationsAppServiceService } from 'src/app/services/reservations.service';

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
  createReservationEvent = new EventEmitter<Reservation>();
  form = this.fb.group({
    reservationDate: '',
    reservationTime: '',
    guestNum: 0,
    specialAccomodation: '',
  });



  /**
   * Constructor
   */

  constructor(private reservationService: ReservationsAppServiceService, 
    private fb: FormBuilder,
    private route:ActivatedRoute) { }

  

  /**
   * Class methods
   */

  ngOnInit(): void { }

  submitReservation(): void {
    
    const data = this.form.value;
    let reservation : Reservation = {
      reservationId: -1,
      reservationDate: data.reservationDate!,
      reservationTime: data.reservationTime!,
      seats: data.guestNum!,
      specialAccomodation: data.specialAccomodation!,
      userId: -1,
      restaurantId: -1,
      name: '',
      contactInfo: '111-222-3333'
    }

    console.log("date: " + data.reservationDate);
    console.log("time: " + data.reservationTime);
    console.log("num of guests: " + data.guestNum);
    console.log("special acc: " + data.specialAccomodation);
    
    if (data.reservationDate != null 
      && data.reservationTime != null
      && data.guestNum != null && data.guestNum! > 0 
      && data.specialAccomodation != null) {

      this.createReservationEvent.emit(reservation);
      this.form.reset();

    }

  }
  
}

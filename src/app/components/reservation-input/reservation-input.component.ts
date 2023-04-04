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
    guestNum: 0,
    specialAccomodation: '',
  });



  /**
   * Constructor
   */

  constructor(private reservationService: ReservationsAppServiceService, 
    private fb: FormBuilder, 
    private customerService : CustomerService,
    private route:ActivatedRoute) { }

  

  /**
   * Class methods
   */

  ngOnInit(): void { }

  submitReservation(): void {
    
    const data = this.form.value;
    let reservation : Reservation = {
      "reservationDate": data.reservationDate!, "guestNum": data.guestNum!,
      "specialAccomodation": data.specialAccomodation!,
      userId: -1,
      restaurantId: -1
    }
    this.createReservationEvent.emit(reservation);

  }



 
    


}

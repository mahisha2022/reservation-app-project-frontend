import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reservation } from 'src/app/models/Reservation';
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
  form = this.fb.group({
   

    reservationDate: '',
    guestNum: 0,
    specialAccomodation: '',
  });

  constructor(private reservationService: ReservationsAppServiceService, 
        private fb: FormBuilder){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


    submitReservation(): void{
      const data = this.form.value;
        let reservation : Reservation = {
          "reservationDate": data.reservationDate!, "guestNum": data.guestNum!,
          "specialAccomodation": data.specialAccomodation!,

          //need help here 
          userId: 0,
          restaurantId: 0
        }
        this.reservationService.postReservation(reservation).subscribe();
    }



 
    


}

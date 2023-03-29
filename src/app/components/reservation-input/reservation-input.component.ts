import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationsAppServiceService } from 'src/app/services/reservations-app-service.service';

@Component({
  selector: 'app-reservation-input',
  templateUrl: './reservation-input.component.html',
  styleUrls: ['./reservation-input.component.css']
})
export class ReservationInputComponent implements OnInit{
   

     reservationDate:string = "";
     guestNum:number = 0;
     specialAccomodation: string = "";

     constructor(private reservationService: ReservationsAppServiceService){}

     ngOnInit(): void {}
    

    submit(): void{
        let reservation: Reservation = {
          reservationDate: this.reservationDate, guestNum: this.guestNum, specialAccomodation: this.specialAccomodation
        };
        this.reservationService.postReservation(reservation).subscribe();
    }
}

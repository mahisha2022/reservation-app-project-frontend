import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpClient) { 
  }

  // Gets Reservations from Spring backend
  getReservationsAPI() : Observable<Reservation[]> {
    return this.http.get<Reservation[]>("localhost:9000/reservations");
  }

  // Posts Reservations to Spring backend
  postReservationAPI(reservation : Reservation) : Observable<Reservation> {
    return this.http.post<Reservation>("localhost:9000/reservations", reservation);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationsAppServiceService {

  /**
   * Constructor
   */

  constructor(private http : HttpClient) { }
  


  /**
   * Class Methods
   */
  
  postReservation(reservation: Reservation): Observable<Reservation>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Reservation>(`http://127.0.0.1:9000/reserve?customer=${reservation.userId}&venue=${reservation.restaurantId}`, reservation, {headers: header});

  }

  getCustomerReseravtiont(): Observable<Reservation[]>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Reservation[]>("http://127.0.0.1:9000/reservations?customer", {headers: header});

  }

  getRestaurantReseravtiont(): Observable<Reservation[]>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Reservation[]>("http://127.0.0.1/reservations?restaurant", {headers: header});

  }

}

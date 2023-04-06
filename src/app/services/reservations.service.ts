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
    return this.http.post<Reservation>(`http://127.0.0.1:9000/reservations/customer/${reservation.userId}/restaurant/${reservation.restaurantId}`, reservation, {headers: header});

  }

  getCustomerReseravtiont(id : number): Observable<Reservation[]>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Reservation[]>("http://127.0.0.1:9000/reservations/customer/" + id, {headers: header});

  }

  getRestaurantReseravtiont(id : number): Observable<Reservation[]>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Reservation[]>("http://127.0.0.1/reservations/restaurant/" + id, {headers: header});

  }

}

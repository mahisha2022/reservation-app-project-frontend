import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationsAppServiceService {


   constructor(private http : HttpClient) { }
  
  
  postReservation(reservation: Reservation): Observable<Reservation>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Reservation>("http://127.0.0.1:9000/reserve?customer=1&venue=1", reservation, {headers: header});

  }

  getCustomerReseravtiont(): Observable<Reservation[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Reservation[]>("http://127.0.0.1/reservations?customer", {headers: header});
  }

  getRestaurantReseravtiont(): Observable<Reservation[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Reservation[]>("http://127.0.0.1/reservations?restaurant", {headers: header});
  }
}

  // /**
  //  * Member Variables
  //  */

  // private favoriteRestaurants : Restaurant[] = [];



  // /**
  //  * Constructor
  //  */

  // constructor(private http : HttpClient) { 
    
  // }



  /**
   * Class Methods
   */

  /*
  // // Gets Reservations from Spring backend
  // getReservationsAPI() : Observable<Reservation[]> {
  //   return this.http.get<Reservation[]>("localhost:9000/reservations");
  // }

  // // Posts Reservations to Spring backend
  // postReservationAPI(reservation : Reservation) : Observable<Reservation> {
  //   return this.http.post<Reservation>("localhost:9000/reservations", reservation);
  // }

  // // Adds restaurant to favorites list
  // addToFavoriteRestaurants(restaurant : Restaurant) : void {
  //   this.favoriteRestaurants.push(restaurant);
  // }

  // // Gets list of favorited restaurants
  // getFavoriteRestaurants() : Restaurant[] {
  //   return this.favoriteRestaurants;
  // }
}
*/

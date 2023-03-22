import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class ReservationsAppServiceService {

  /**
   * Member Variables
   */

  private favoriteRestaurants : Restaurant[] = [];



  /**
   * Constructor
   */

  constructor(private http : HttpClient) { 
    
  }



  /**
   * Class Methods
   */

  // Gets Reservations from Spring backend
  getReservationsAPI() : Observable<Reservation[]> {
    return this.http.get<Reservation[]>("localhost:9000/reservations");
  }

  // Posts Reservations to Spring backend
  postReservationAPI(reservation : Reservation) : Observable<Reservation> {
    return this.http.post<Reservation>("localhost:9000/reservations", reservation);
  }

  // Adds restaurant to favorites list
  addToFavoriteRestaurants(restaurant : Restaurant) : void {
    this.favoriteRestaurants.push(restaurant);
  }

  // Gets list of favorited restaurants
  getFavoriteRestaurants() : Restaurant[] {
    return this.favoriteRestaurants;
  }

}

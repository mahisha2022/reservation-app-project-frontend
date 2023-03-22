import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsAppServiceService {

  /**
   * Member Variables
   */

  private favoriteRestaurants : Reservation[] = [];



  /**
   * Constructor
   */

  constructor(private http : HttpClient) { 
    
  }



  /**
   * Class Methods
   */

  // Gets Reservations from Spring backend
  getReservationsAPI() : Observable<Reservations[]> {
    this.http.get<Reservation>("localhost:9000/reservations");
  }

  // Posts Reservations to Spring backend
  postReservationAPI(Reservation reservation) : Observable<Reservation> {
    this.http.post<Reservation>("localhost:9000/reservations");
  }

  // Adds restaurant to favorites list
  addToFavoriteRestaurants(Restaurant restaurant) : void {
    this.favoriteRestaurants.push(restaurant);
  }

  // Gets list of favorited restaurants
  getFavoriteRestaurants() : Restaurants[] {
    return this.favoriteRestaurants;
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

   constructor(private http : HttpClient) { }
  
  postRestaurant(restaurant: Restaurant): Observable<Restaurant>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Restaurant>("http://127.0.0.1:9000/restaurant/register", restaurant, {headers: header});
    console.log(restaurant);
  }

  getRestaurant(): Observable<Restaurant[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Restaurant[]>("http://127.0.0.1/restaurants", {headers: header});
  }
}

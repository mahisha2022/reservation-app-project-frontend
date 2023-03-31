import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

///
  inputValue!: string;

  restaurant : Restaurant [] =[];

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
    return this.http.get<Restaurant[]>("http://127.0.0.1:9000/restaurants", {headers: header});
  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<Restaurant>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Restaurant>(`http://127.0.0.1/restaurant/${id}`, restaurant, {headers: header});
  }

  deleteRestaurant(id: number): Observable<Restaurant>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.delete<Restaurant>(`http://127.0.0.1/restaurant/${id}`,  {headers: header});
  }
}

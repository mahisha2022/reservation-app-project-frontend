import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Restaurant } from '../models/Restaurant';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

///
  inputValue!: string;

  restaurant : Restaurant [] =[];

  constructor(private http : HttpClient) { }

  loginRestaurant(user: Restaurant): Observable<Restaurant> {

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Restaurant>("http://54.174.143.19:9000/restaurant/login", user, {headers: header});

  }
  
  postRestaurant(restaurant: Restaurant): Observable<Restaurant>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Restaurant>("http://54.174.143.19:9000/restaurant/register", restaurant, {headers: header});

  }

  getRestaurant(): Observable<Restaurant[]>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Restaurant[]>("http://54.174.143.19:9000/restaurants", {headers: header});

  }

  getRestaurantById(id:number) : Observable<Restaurant> {

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Restaurant>(`http://54.174.143.19:9000/restaurant/${id}`, {headers: header});

  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<Restaurant>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Restaurant>(`http://54.174.143.19:9000/restaurant/${id}`, restaurant, {headers: header});

  }

  deleteRestaurant(id: number): Observable<Restaurant>{

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.delete<Restaurant>(`http://54.174.143.19:9000/restaurant/${id}`,  {headers: header});

  }
  
}

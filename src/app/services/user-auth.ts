import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

   constructor(private http : HttpClient) { }
  
  signUpUser(user: User): Observable<User>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<User>("http://127.0.0.1:9000/customer/register", user, {headers: header});
    
  }


}
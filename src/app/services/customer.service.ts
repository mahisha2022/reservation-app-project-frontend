import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../models/Customer';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  registerCustomer(customer : Customer) : Observable<Customer> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Customer>("http://127.0.0.1:9000/customer/register", customer, {headers: header});
  }

  loginCustomer() : Observable<Customer> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Customer>("http://127.0.0.1:9000/customer/login");
  }

  getReservations(id : BigInt) : Observable<Reservation[]> {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Reservation[]>("http://127.0.0.1:9000/customer/" + id + "/reservations");
  }
}

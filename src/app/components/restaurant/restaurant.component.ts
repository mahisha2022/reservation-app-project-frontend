import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit{

  /**
   * Member Variables
   */

  @Input()
    restaurant: Restaurant={
      address: '',
      reservations: [],
      username: '',
      passwd: '',
       name : '',
    phone: '',
    openAt: "11:00AM",
    closeAt: "10:00PM",
    totalSeats: 100,
  
    };
    // userId : 1,
    // username : "test username",
    // passwd : "test password",
    // name : "Test Restaurant",
    // address: "test address",
    // phone: "989-111-1111",
    // openAt: "11:00AM",
    // closeAt: "10:00PM",
    // totalSeats: 100,
    // reservations : [],
  



  /**
   * Constructor
   */

  constructor() { }
  ngOnInit(): void {}



  /**
   * Class Methods
   */

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Route, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Restaurant } from 'src/app/models/Restaurant';
import { CustomerService } from 'src/app/services/customer.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  /**
   * Member Variables
   */
  
  username: string ="";
  passwd: string = "";
  form = this.fb.group({
    user_type: ['', Validators.required],
    username: '',
    password: ''
  });
  
 

  /**
   * Constructor
   */

  constructor(private customerService: CustomerService,
    private restaurantService: RestaurantService,
    private fb: FormBuilder, private router: Router) { }

    

  /**
   * Class Methods
   */

  ngOnInit() : void { }

  login() : void {

    const data = this.form.value;
    let user: Customer | Restaurant;

    console.log(this.username);
    console.log(this.passwd);

    if (data.user_type == "Customer") {

      let user = {username: this.username, passwd: this.passwd, id: 1000, reservations: []};
      console.log(user);
      this.customerService.loginCustomer(user).subscribe(foundUser => {

        if (foundUser == null) {

          alert("Invalid Login!");

        } else {

          if (foundUser.id != null) {
            const navigationExtras: NavigationExtras = {
              queryParams: {
                id: foundUser.id!
              }
            }
            this.router.navigate(["/listOfRestaurants"], navigationExtras);
          }

        }
        
      });

    } else if (data.user_type == "Restaurant" ) {

      let restaurant : Restaurant = {
        address: '',
        reservations: [],
        username: this.username,
        passwd: this.passwd
      }
      this.restaurantService.loginRestaurant(restaurant).subscribe(foundRestaurant =>{
        
        if (foundRestaurant == null) {

          alert("Invalid Login!");

        } else {

          if (foundRestaurant.id != null) {
            const navigationExtras: NavigationExtras = {
              queryParams: {
                id: foundRestaurant.id!
              }
            }
            this.router.navigate(["/adminDetails"], navigationExtras);
          }

        }

      });

    } else {

      alert("Please Select a User Type to continue!");

    }

  }

}

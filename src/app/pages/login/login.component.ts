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


  
    username: string ="";
    passwd: string = "";
    form = this.fb.group({
    user_type: ['', Validators.required],})
    currentCustomer : Customer = {
      username:'', passwd:'' }
  
 

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
    if (data.user_type != "Restaurant" && this.username === this.currentCustomer.username && this.passwd === this.currentCustomer.passwd ) {
      let user = {username: this.username, passwd: this.passwd, id: 1000};
      this.customerService.loginCustomer(user).subscribe(user => {
        
      });
      const navigationExtras: NavigationExtras = {
        queryParams: {
          id: user.id
        }
      }
      this.router.navigate(["/listOfRestaurants"], navigationExtras);
    } else {
      console.log("invalid username or password")
    }

  }

}

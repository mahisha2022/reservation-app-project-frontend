import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators, FormBuilder } from '@angular/forms';
import { Customer } from '../../models/Customer';
import { Restaurant } from '../../models/Restaurant';
import { User } from '../../models/User';
import { CustomerService } from 'src/app/services/customer.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import Validation from './util/Validation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  /**
   * Member Variables
   */

  user: Customer | Restaurant | null = null;
  error: string = "";
  form = this.fb.group({
    username: ['',
      [Validators.required]
    ],
    password: ['',
      [Validators.required, Validators.minLength(4)]
    ],
    confirm_pass: ['',
      [Validators.required, Validators.minLength(4)]
    ],
    user_type: ['', Validators.required],
    restaurant_name: '',
    address: '',
    phone: '',
  },
  {
    validators: [Validation.match('password', 'confirm_pass'),
        Validation.restaurantReq('restaurant_name'), Validation.restaurantReq('address')],
  });

  /**
   * Constructor
   */

  constructor(private customerService: CustomerService,
    private restaurantService: RestaurantService,
    private fb: FormBuilder) { }

    

  /**
   * Class Methods
   */

  ngOnInit() : void {
  }

  attemptRegister() : void {
    this.user = null;
    this.error = "";
    const data = this.form.value;
    let user: Customer | Restaurant;
    if (data.user_type != "Restaurant") {
      user = {"username": data.username!, "passwd": data.password!, "reservations": []};
      this.customerService.registerCustomer(user).subscribe(value => this.user=value, error => this.error=error.error.error);
    } else {
      user = {"username": data.username!, "passwd": data.password!, "reservations": [],
        "name": data.restaurant_name!, "address": data.address!, "phone": data.phone!};
      this.restaurantService.postRestaurant(user).subscribe(value => this.user=value, error => this.error=error.error.error);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  /**
   * Member Variables
   */

  username : string = "";
  confirm_username : string = "";
  password : string = "";
  confirm_password : string = "";
  private userType : string = "";



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  ngOnInit() : void { }

  customerRadioButtonClicked() : void {
    this.userType = "Customer";
  }

  restaurantRadioButtonClicked() : void {
    this.userType = "Restaurant";
  }

  attemptSignUp() : void {

    

  }

}

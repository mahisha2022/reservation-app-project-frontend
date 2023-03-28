import { Component } from '@angular/core';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent {

  /**
   * Member Variables
   */

  username : string = "";
  confirm_username : string = "";
  password : string = "";
  confirm_password : string = "";



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  submit() {
    
  }

}

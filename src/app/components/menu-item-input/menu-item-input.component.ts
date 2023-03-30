import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-menu-item-input',
  templateUrl: './menu-item-input.component.html',
  styleUrls: ['./menu-item-input.component.css']
})
export class MenuItemInputComponent {

  /**
   * Member Variables
   */

  @Output()
  addItemEvent = new EventEmitter<MenuItem>();
  itemName : string = "";
  itemPrice : number = 0.00;



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  addItem() {
    console.log(this.itemName);
    if (this.itemName.length == 0) {
      alert("Invalid Item Name");
      return;
    }
    console.log(this.itemPrice);
    if (this.itemPrice == 0.00) {
      alert("Invalid Item Price");
      return;
    }
    let newMenuItem : MenuItem = {
      itemName : this.itemName,
      itemPrice : this.itemPrice
    };
    this.addItemEvent.emit(newMenuItem);
    this.itemName = "";
    this.itemPrice = 0.00;
  }

}

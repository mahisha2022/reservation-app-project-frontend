import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-admin-restaurant-details',
  templateUrl: './admin-restaurant-details.component.html',
  styleUrls: ['./admin-restaurant-details.component.css']
})
export class AdminRestaurantDetailsComponent {

  /**
   * Member Variables
   */

  formTitle : string = "Current Details";
  menuItems : MenuItem[] = [
    {
      itemName : "Item Name 1",
      itemPrice : 9.99
    },
    {
      itemName : "Item Name 2",
      itemPrice : 12.99
    },
    {
      itemName : "Item Name 3",
      itemPrice : 15.99
    },
    {
      itemName : "Item Name 4",
      itemPrice : 6.99
    },
    {
      itemName : "Item Name 5",
      itemPrice : 13.99
    },
    {
      itemName : "Item Name 6",
      itemPrice : 20.99
    }
  ];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  addItem(item : MenuItem) {
    this.menuItems.push(item);
  }

  deleteItem(item : MenuItem) {
    let index = -1;
    for (let i = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i] === item) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      this.menuItems.splice(index, 1);
    }
  }

}

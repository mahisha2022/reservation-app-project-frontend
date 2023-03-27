import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

  /**
   * Member Variables
   */

  @Input()
  item : MenuItem = {
    itemName : "Dummy Item",
    itemPrice : 9.99
  };
  @Output()
  deletingItem = new EventEmitter<MenuItem>();



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  deleteItem() {
    this.deletingItem.emit(this.item);
  }

}

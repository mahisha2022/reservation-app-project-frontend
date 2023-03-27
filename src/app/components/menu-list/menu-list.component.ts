import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {

  /**
   * Member Variables
   */

  @Input()
  menuItems : MenuItem[] = [];
  @Output()
  deletingItem = new EventEmitter<MenuItem>();



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  deleteItemEvent(item : MenuItem) {
    this.deletingItem.emit(item);
  }

}

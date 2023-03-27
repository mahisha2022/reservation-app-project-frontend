import { Component, Input } from '@angular/core';
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



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

}

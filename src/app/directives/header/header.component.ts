import {Component} from '@angular/core';
import {ShoppingcartService} from "../../services/shoppingcart.service";

@Component({
  moduleId: module.id,
  selector: 'header-navigation',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  constructor(private shoppingcartService: ShoppingcartService) {
  }
}

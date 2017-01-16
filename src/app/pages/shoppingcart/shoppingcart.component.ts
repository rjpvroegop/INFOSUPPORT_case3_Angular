import {Component} from '@angular/core';
import {Product} from "../../models/product";
import {ShoppingcartService} from "../../services/shoppingcart.service";

@Component({
  moduleId: module.id,
  selector: 'shopping-cart',
  templateUrl: 'shoppingcart.component.html',
  styleUrls: ['shoppingcart.component.css']
})
export class ShoppingcartComponent {

  constructor(public shoppingcartService: ShoppingcartService) {
  }

  addProduct(product: Product){
    this.shoppingcartService.addProduct(product);
  }

  removeProduct(product: Product){
    this.shoppingcartService.removeProduct(product);
  }

  clearProduct(product: Product){

  }
}

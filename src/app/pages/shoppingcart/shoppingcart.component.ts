import {Component} from '@angular/core';
import {Order} from "../../models/order";
import {Orderitem} from "../../models/orderitem";
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
    // this.order.orderitems = [];
  }

  addProduct(product: Product){
    this.shoppingcartService.addProduct(product);
  }

  removeProduct(product: Product){
    this.shoppingcartService.removeProduct(product);
    // this.order = this.shoppingcartService.getOrder();
  }

  clearProduct(product: Product){

  }

  addDummyItemToCart(id: number){
    let p = new Product();
    let oi = new Orderitem();

    p.name = 'test';
    p.id = id;
    p.description = 'testproduct';
    p.price = 20;

    oi.product = p;
    oi.amount = 2;


    // this.order.orderitems.push(oi);
  }
}

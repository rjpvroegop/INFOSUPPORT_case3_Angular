import {Component, OnInit} from '@angular/core';
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
export class ShoppingcartComponent implements OnInit {

  order: Order = new Order();

  ngOnInit(): void {

  }
  constructor(private shoppingcartService: ShoppingcartService) {
    this.order.orderitems = [];
    this.addDummyItemToCart(1);
  }

  increaseAmount(product: Product){
    this.shoppingcartService.addProduct(product);
  }

  decreaseAmount(product: Product){

  }

  removeProduct(product: Product){

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


    this.order.orderitems.push(oi);
  }
}

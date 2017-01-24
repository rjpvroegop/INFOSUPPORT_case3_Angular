import { Component, OnInit } from '@angular/core';
import {Order} from "../../models/order";
import {ShoppingcartService} from "../../services/shoppingcart.service";

@Component({
    moduleId: module.id,
    selector: 'post-order-view',
    templateUrl: 'post-order.component.html',
  styleUrls: ['post-order.component.css']
})
export class PostOrderComponent implements OnInit {
  order: Order;
    constructor(private shoppingcartService: ShoppingcartService) {
      this.order = shoppingcartService.getOrder();
    }

    ngOnInit() {
      // here your order is set
    }
}

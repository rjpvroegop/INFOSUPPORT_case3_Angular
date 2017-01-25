import {Component, OnInit} from "@angular/core";
import {Order} from "../../models/order";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../services/order.service";

@Component({
  moduleId: module.id,
  selector: 'post-order-view',
  templateUrl: 'post-order.component.html',
  styleUrls: ['post-order.component.css']
})
export class PostOrderComponent implements OnInit {
  order: Order = new Order();

  constructor(private shoppingcartService: ShoppingcartService, private route: ActivatedRoute, private orderService: OrderService) {
    this.order = shoppingcartService.getOrder();

    this.route.params.subscribe(params => {
      if (params['orderid'] != undefined) {
        orderService.getOrder(params['orderid']).then(result => this.order = <Order>result);
      }
    });
  }

  ngOnInit() {
      $('header-navigation, footer-navigation').hide();
  }
}

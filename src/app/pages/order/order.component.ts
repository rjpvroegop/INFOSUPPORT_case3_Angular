import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";
import {Customer} from "../../models/customer";
import {AccountService} from "../../services/account.service";
import {Account} from "../../models/account";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {Address} from "../../models/address";

@Component({
  moduleId: module.id,
  selector: 'order-overview',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService, private accountService: AccountService, private shoppingcartService: ShoppingcartService) {
    this.order = shoppingcartService.getOrder();
    this.order.customer = this.order.customer || new Customer();
    this.order.customer.addresses = this.order.customer.addresses || [];
    this.order.orderitems = this.order.orderitems || [];
  }

  ngOnInit() {
    if(!this.order.customer.id) {
      this.createDummyOrder();
      // window.location.replace("/login");
    }
  }

  setShippingAddress(address: Address){
    this.order.shippingAddress = address;
  }

  setBillingAddress(address: Address){
    this.order.billingAddress = address;
  }

  placeOrder(){
    this.order.orderState = "Posted";
    this.order.orderTime = new Date().toISOString();
    this.order.payment.method = "bill";
  }

  createDummyOrder() {
    this.orderService.getOrder("5885df13a24a5b140c6f0e39").then(order => {
      this.order = <Order> order;
      this.order.customer = new Customer();
      this.order.customer.addresses = [];
      this.setDummyCustomer();
      this.order.customer.id = 1;
    })
  }

  setDummyCustomer(){
    this.accountService.getAccount(1).then(account => {
      this.order.customer =  (<Account> account).customer;
      this.order.billingAddress = this.order.customer.addresses[0];
      this.order.shippingAddress = this.order.customer.addresses[0];
    })
  }
}

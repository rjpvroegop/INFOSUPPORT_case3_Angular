import {Component, OnInit} from "@angular/core";
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";
import {Customer} from "../../models/customer";
import {AccountService} from "../../services/account.service";
import {Account} from "../../models/account";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {Address} from "../../models/address";
import {LoginService} from "../../services/login.service";

@Component({
  moduleId: module.id,
  selector: 'order-overview',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order = new Order();
  termsaccept: boolean = false;

  finishedOrderProcess = false;
  invoiceOrder: Order = new Order();

  constructor(private orderService: OrderService, private accountService: AccountService, private shoppingcartService: ShoppingcartService, private loginService: LoginService) {
    this.order.customer = this.order.customer || new Customer();
    this.order.customer.addresses = this.order.customer.addresses || [];
    this.order.orderitems = this.order.orderitems || [];

    this.checkCustomer();
  }

  ngOnInit() {
  }

  checkCustomer(){

    if(!this.loginService.loggedIn()) {
      window.location.replace("/login");
    } else {
      let customer = this.loginService.getCustomer();
      this.shoppingcartService.setCustomer(customer);
      this.shoppingcartService.setBillingAddress(customer.addresses[0]);
      this.shoppingcartService.setShippingAddress(customer.addresses[0]);
      this.order = this.shoppingcartService.getOrder();

      if(!this.order.orderitems){
        window.location.replace("/catalog")
      }
    }
  }

  setShippingAddress(address: Address){
    this.shoppingcartService.setShippingAddress(address);
    this.order = this.shoppingcartService.getOrder();
  }

  setBillingAddress(address: Address){
    this.shoppingcartService.setBillingAddress(address);
    this.order = this.shoppingcartService.getOrder();
  }

  placeOrder(){
    this.shoppingcartService.setOrderPlacementDetails();
    this.order = this.shoppingcartService.getOrder();
    this.orderService.saveOrder(this.order).then(response => this.invoiceOrder = <Order>response);
    this.finishedOrderProcess = true;
    this.shoppingcartService.emptyCart();
  }

  setDummyCustomer(){
    this.accountService.getAccount(1).then((account: Account) => {
      this.shoppingcartService.setCustomer(account.customer);
      this.shoppingcartService.setBillingAddress(account.customer.addresses[0]);
      this.shoppingcartService.setShippingAddress(account.customer.addresses[0]);
      this.order = this.shoppingcartService.getOrder();
    })
  }
}

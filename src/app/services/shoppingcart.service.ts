import {Injectable} from "@angular/core";
import {Order} from "../models/order";
import {Product} from "../models/product";
import {OrderItem} from "../models/orderitem";
import {popupMessage} from "../../assets/js/popup";
import {Address} from "../models/address";
import {Customer} from "../models/customer";
import {Payment} from "../models/payment";

@Injectable()
export class ShoppingcartService {
  private order: Order = new Order();
  private localstorageKey: string = "kantilevershoppingcart";

  constructor(){
    this.order.orderitems = [];
    this.order.customer = new Customer();
    this.order.customer.addresses = [];
    this.order.payment = new Payment();
    this.order.billingAddress = new Address();
    this.order.shippingAddress = new Address();
    this.getOrder();
  }

  setShippingAddress(address: Address){
    this.order.shippingAddress = address;
    this.saveOrder();
  }

  setBillingAddress(address: Address){
    this.order.billingAddress = address;
    this.saveOrder();
  }

  setOrderPlacementDetails(){
    this.order.orderTime = new Date().toISOString();
    this.order.payment.method = "bill";
    this.saveOrder();
  }

  setCustomer(customer : Customer){
    this.order.customer = customer;
    this.saveOrder();
  }

  addProduct(product: Product, hidepopup: boolean) {
    let found: boolean = false;
    for (let orderItem of this.order.orderitems) {
      if (orderItem.product.id == product.id) {
        orderItem.amount++;
        found = true;
      }
    }
    if (!found) {
      let orderitem = new OrderItem();
      orderitem.product = product;
      orderitem.amount = 1;
      this.order.orderitems.push(orderitem)
    }
    this.saveOrder();

    console.log(hidepopup);

    if(!hidepopup){
      new popupMessage(product.name, 'Added to your shoppingcart', 'success');
    }
  }

  removeProduct(product: Product) {
    for (let orderItem of this.order.orderitems) {
      if (orderItem.product.id == product.id) {
        if (orderItem.amount == 1) {
          let i = this.order.orderitems.indexOf(orderItem);
          this.order.orderitems.splice(i, 1)
        } else {
          orderItem.amount--;
        }
      }
    }
    this.saveOrder();

    new popupMessage(product.name, 'Removed from your shoppingcart', 'warning');
  }

  clearProduct(product: Product) {
    for (let orderItem of this.order.orderitems) {
      if (orderItem.product.id == product.id) {
        let i = this.order.orderitems.indexOf(orderItem);
        this.order.orderitems.splice(i, 1)
      }
    }
    this.saveOrder();

    new popupMessage(product.name, 'Removed from your shoppingcart', 'danger');
  }

  emptyCart(){
    while(this.order.orderitems.length > 0){
      this.order.orderitems.pop();
    }

    this.saveOrder();

    new popupMessage('All products', 'are removed from your shoppingcart', 'danger');
  }

  private saveOrder() {
    localStorage.setItem(this.localstorageKey, JSON.stringify(this.order));
  }

  getOrder(): Order {
    let shoppingcartOrder = localStorage.getItem(this.localstorageKey);

    if(!shoppingcartOrder){
      this.saveOrder();
    }
    else {
      this.order = JSON.parse(shoppingcartOrder);
    }

    return this.order;
  }
}

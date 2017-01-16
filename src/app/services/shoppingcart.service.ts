import {Injectable} from "@angular/core";
import {Order} from "../models/order";
import {Product} from "../models/product";
import {Orderitem} from "../models/orderitem";
import {popupMessage} from "../../assets/js/popup";

@Injectable()
export class ShoppingcartService {
  order: Order = new Order();

  constructor(){
    this.order.orderitems = [];
    this.getOrder();
  }

  addProduct(product: Product) {
    let found: boolean = false;
    for (let orderItem of this.order.orderitems) {
      if (orderItem.product.id == product.id) {
        orderItem.amount++;
        found = true;
      }
    }
    if (!found) {
      let orderitem = new Orderitem;
      orderitem.product = product;
      orderitem.amount = 1;
      this.order.orderitems.push(orderitem)
    }
    this.saveOrder();

    new popupMessage(product.name, 'Added to your shoppingcart', 'success');
  }

  removeProduct(product: Product) {
    for (let orderItem of this.order.orderitems) {
      if (orderItem.product.id == product.id) {
        if (orderItem.amount == 1) {
          let i = this.order.orderitems.indexOf(orderItem);
          this.order.orderitems.slice(i, 1)
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
    localStorage.setItem('kantilevershoppingcart', JSON.stringify(this.order));
  }

  getOrder() {
    let shoppingcartOrder = localStorage.getItem('kantilevershoppingcart');
    this.order = shoppingcartOrder ? JSON.parse(shoppingcartOrder) : this.order;
    return this.order;
  }
}

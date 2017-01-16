import {Injectable} from "@angular/core";
import {Order} from "../models/order";
import {Product} from "../models/product";
import {Orderitem} from "../models/orderitem";

@Injectable()
export class ShoppingcartService {
  order: Order = new Order();

  constructor(){
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
    this.getOrder();//just for testing
  }

  removeProduct(product: Product) {
    for (let orderItem of this.order.orderitems) {
      if (orderItem.product.id == product.id) {
        if (orderItem.amount == 1) {
          let i = this.order.orderitems.indexOf(orderItem)
          this.order.orderitems.slice(i, 1)
        } else {
          orderItem.amount--;
        }
      }
    }
    this.saveOrder();
    this.getOrder();//just for testing
  }

  private saveOrder() {
    let path = ""
    let d: Date = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires: string = "expires=" + d.toUTCString();
    let value = JSON.stringify(this.order)
    document.cookie = "KantileverOrder" + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
  }

  private getOrder() {
    let name = "KantileverOrder";
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = name + "=";
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s\+/g, "");
      if (c.indexOf(cookieName) == 0) {
        this.order = JSON.parse(c.substring(cookieName.length, c.length));
        console.log(this.order);
      }
    }
  }
}

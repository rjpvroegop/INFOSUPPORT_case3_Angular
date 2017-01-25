import {Pipe, PipeTransform} from '@angular/core';
import {Order} from "../models/order";

@Pipe({
  name: "orderprice"
})
export class OrderpricePipe implements PipeTransform {
  transform(values: Order): number {
    return Number(values.orderitems.reduce((price, orderitem) => {
      return price + orderitem.product.price * orderitem.amount;
    }, 0).toFixed(2));
  }
}

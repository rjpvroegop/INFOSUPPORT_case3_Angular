import {Customer} from "./customer";
import {OrderItem} from "./orderitem";
import {Address} from "./address";
import {Payment} from "./payment";
export class Order {
  id: string;
  bsKey: string;
  orderTime: string;
  sendTime: string;
  billingAddress: Address;
  shippingAddress: Address;
  payment: Payment;
  orderState: string;
  customer: Customer;
  orderitems: OrderItem[];
}

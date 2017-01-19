import {Customer} from "./customer";
import {Orderitem} from "./orderitem";
export class Order {
  deliveryAddressId: number;
  billingAddressId: number;
  customer: Customer;
  orderitems: Orderitem[];
}

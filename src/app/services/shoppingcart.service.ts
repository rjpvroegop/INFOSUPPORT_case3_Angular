import {Injectable} from '@angular/core';
import {Order} from "../models/order";

@Injectable()
export class ShoppingcartService {
  order: Order = new Order();
}

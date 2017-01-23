import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Order} from "../models/order";

@Injectable()
export class OrderService {
  private orderUrl = environment.url + "/bsbestellingenbeheer/orders";

  constructor(private http: Http) {}

  getOrders() {
    return new Promise((res, rej) => {
      this.http.get(this.orderUrl)
        .subscribe(
          (data) => res(this.extractOrders(data))
        );
    })
  }

  getOrder(id: string){
    return new Promise((res, rej) => {
      this.http.get(this.orderUrl + "/" + id)
        .subscribe(
          (data) => res(this.extractOrders(data))
        );
    })
  }

  extractOrders(res): Order[] {
    let body = res.json();
    return body;
  }
}

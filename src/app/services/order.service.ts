import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Order} from "../models/order";
import {popupMessage} from "../../assets/js/popup";

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

  saveOrder(order: Order){
    return new Promise((res, rej) => {
      this.http.post(this.orderUrl, order).subscribe(
        data => res(data.json()),
        err => new popupMessage('Could not save order', err.text(), 'danger')
      );
    });
  }

  extractOrders(res): Order[] {
    let body = res.json();
    return body;
  }
}

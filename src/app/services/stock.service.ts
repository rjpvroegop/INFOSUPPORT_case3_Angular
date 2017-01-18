import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class StockService {
  private suppliersUrl = environment.url + "/bsvoorraadbeheer/stock";

  constructor(private http: Http) {}

  getStock(id: number) {
    return new Promise((res, rej) => {
      this.http.get(this.suppliersUrl + `/${id}`)
        .subscribe(
          (data) => res(this.extractStock(data))
        );
    })
  }

  extractStock(res) {
    let body = res.json();
    return body;
  }
}

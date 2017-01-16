import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Product} from "../models/product";
import {environment} from "../../environments/environment";

@Injectable()
export class ProductService {
  private activeProductsUrl = environment.url + "/bscatalogusbeheer/catalog/activeproducts";
  private allProductsUrl = environment.url + "/bscatalogusbeheer/catalog/products";
  private singleProductUrl: string = environment.url + "/bscatalogusbeheer/catalog/products/";

  constructor(private http: Http) {
  }

  getActiveProducts() {
    return new Promise((res, rej) => {
      this.http.get(this.activeProductsUrl)
        .subscribe(
          (data) => res(this.extractProducts(data))
        );
    })
  }

  getAllProducts() {
    return new Promise((res, rej) => {
      this.http.get(this.allProductsUrl)
        .subscribe(
          (data) => res(this.extractProducts(data))
        );
    })
  }

  getProduct(id) {
    return new Promise((res, rej) => {
      this.http.get(this.singleProductUrl + id)
        .subscribe(
          (data) => res(data.json())
        );
    })
  }

  extractProducts(res) {
    let body = res.json();

    let products = body.map(product => {
      product = <Product> product;
      return product;
    });

    return products;
  }
}

import {Component} from "@angular/core";
import {Product} from "../../model/product";
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'product-detail-component',
  templateUrl: 'product-detail.component.html',
})

export class ProductDetailComponent {
  productUrl = "http://localhost:10001/bscatalogusbeheer/catalog/products/1";
  product = {
    supplier: {}
  }

  constructor(private http: Http) {
    this.getProduct();
  }

  getProduct() {
    this.http.get(this.productUrl)
      .subscribe(
        this.extractProduct.bind(this)
      );
  }
  extractProduct(res) {
    let body = res.json();
    console.log(<Product> body);
    this.product = <Product> body;
  }
}

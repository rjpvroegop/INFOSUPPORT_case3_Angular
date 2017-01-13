import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";

@Component({
    moduleId: module.id,
    selector: 'product-page',
    templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  product: Product = new Product();

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.productService.getProduct(id)
        .then(product => {
          this.product = <Product> product;
        });
    });
  }

}

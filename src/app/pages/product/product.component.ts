import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ShoppingcartService} from "../../services/shoppingcart.service";

@Component({
    moduleId: module.id,
    selector: 'product-page',
    templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  product: Product = new Product();

  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingcartService: ShoppingcartService) {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.productService.getProduct(id)
        .then(product => {
          this.product = <Product> product;
        });
    });
  }

  addProductToCart(product: Product){
    this.shoppingcartService.addProduct(product);
  }

}

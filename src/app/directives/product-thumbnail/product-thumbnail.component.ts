import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {Input} from "@angular/core/src/metadata/directives";
import {ShoppingcartService} from "../../services/shoppingcart.service";

@Component({
  moduleId: module.id,
  selector: 'product-thumbnail',
  templateUrl: 'product-thumbnail.component.html',
  styleUrls: ['product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Product;

  constructor(private shoppingcartService: ShoppingcartService) {

  }

  ngOnInit() {
  }

  addProductToCart(product: Product){
    this.shoppingcartService.addProduct(product);
  }

}

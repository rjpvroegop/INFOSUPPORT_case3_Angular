import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {Input} from "@angular/core/src/metadata/directives";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {StockService} from "../../services/stock.service";
import {Stockitem} from "../../models/stockitem";

@Component({
  moduleId: module.id,
  selector: 'product-thumbnail',
  templateUrl: 'product-thumbnail.component.html',
  styleUrls: ['product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Product;

  constructor(private shoppingcartService: ShoppingcartService, private stockService:StockService) {

  }

  ngOnInit() {
    this.stockService.getStock(this.product.id)
      .then((stockitem: Stockitem) => $(`.${this.product.id}stockamount`).html(String(stockitem.stock)));
  }

  addProductToCart(product: Product){
    this.shoppingcartService.addProduct(product);
  }

}

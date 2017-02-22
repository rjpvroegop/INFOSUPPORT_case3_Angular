import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {Input} from "@angular/core/src/metadata/directives";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {StockService} from "../../services/stock.service";
import {Stockitem} from "../../models/stockitem";
import {popupMessage} from "../../../assets/js/popup";

@Component({
  moduleId: module.id,
  selector: 'product-thumbnail',
  templateUrl: 'product-thumbnail.component.html',
  styleUrls: ['product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: Product;
  stock: number = 0;

  constructor(private shoppingcartService: ShoppingcartService, private stockService: StockService) {

  }

  ngOnInit() {
  }

  addProductToCart(product: Product) {
    this.stockService.getStock(this.product.id)
      .then((stockitem: Stockitem) => {
        this.stock = stockitem.stock;
      })
      .then(()=>{


      if(this.stock <= 0){
        new popupMessage('Please note:', 'This product is out of stock. Delivery may take some time.', 'warning')
      }

      this.shoppingcartService.addProduct(product);
    });
  }

}

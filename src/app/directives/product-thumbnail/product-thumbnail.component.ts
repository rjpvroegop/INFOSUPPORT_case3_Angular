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
  hidepopup: boolean = true;
  popupMessageOk = 'added to shoppingcart<span class="glyphicon glyphicon-ok"></span>';
  popupMessageNo = 'added to shoppingcart.<br>Item is out of stock.<br>Delivery may take some time.';

  constructor(private shoppingcartService: ShoppingcartService, private stockService: StockService) {

  }

  ngOnInit() {
  }

  addProductToCart(product: Product) {
    this.stockService.getStock(this.product.id)
      .then((stockitem: Stockitem) => {
        this.stock = stockitem.stock;
      })
      .then(()=> {
        this.showAddedPopup();
        this.shoppingcartService.addProduct(product, true);
      });
  }

  showAddedPopup(){
    this.hidepopup = false;
    setTimeout(()=> {
      this.hidepopup = true
    }, 2000);
  }

}

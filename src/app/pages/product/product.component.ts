import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {StockService} from "../../services/stock.service";
import {Stockitem} from "../../models/stockitem";
import {popupMessage} from "../../../assets/js/popup";

@Component({
    moduleId: module.id,
    selector: 'product-page',
    templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {
  product: Product = new Product();
  stock: number;
  hidepopup:boolean = true;

  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingcartService: ShoppingcartService, private stockService: StockService) {
    this.route.params.subscribe(params => {
        let id = params['id'];

      this.productService.getProduct(id)
        .then(product => {
          this.product = <Product> product;


          this.stockService.getStock(this.product.id)
            .then((stockitem: Stockitem) => {
              this.stock = stockitem.stock;
            });
        });
    });
  }

  addProductToCart(product: Product) {
      this.showAddedPopup();
      this.shoppingcartService.addProduct(product, true);
  }

  showAddedPopup(){
    this.hidepopup = false;
    setTimeout(()=> {
      this.hidepopup = true
    }, 2000);
  }

}

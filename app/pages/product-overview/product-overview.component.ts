import { Component } from '@angular/core';
import { Product } from '../../model/product'
@Component({
  moduleId: module.id,
  selector : 'product-overview-component',
  templateUrl : 'product-overview.component.html',
})
export class ProductOverviewComponent {
  title = "Overview Of Products";
  search_title = "";
  search_price = "";
  products = PRODUCTS;

  printSomething(){
    console.log('Key ' + this.search_title);
  }
}

const PRODUCTS : Product[] = [
  { id : 1, title : "Product 1 ",  price : 1.2},
  { id : 2, title : "Product 2 ",  price : 3.4},
  { id : 3, title : "Product 3 ",  price : 5.6},
  { id : 3, title : "Sproduct 3 ",  price : 5.6}

]

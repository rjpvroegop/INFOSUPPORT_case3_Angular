import {Component} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  moduleId: module.id,
  selector: 'catalog-page',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})
export class CatalogComponent{
  products: Product[] = [];
  sort_options: string[] = ['name', 'price'];
  show_bikes = true;
  show_clothes = true;
  show_parts = true;
  show_misc = true;
  sort_rule: string = '';
  search_term: string = '';

  constructor(private productService: ProductService) {
    this.productService.getActiveProducts()
      .then(products => {
        this.products = <Product[]> products;
      });
  }
}
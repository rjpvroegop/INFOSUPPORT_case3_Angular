import {Component} from '@angular/core';
import {Product} from '../../model/product'
@Component({
  moduleId: module.id,
  selector: 'product-detail-component',
  templateUrl: 'product-detail.component.html',
})
export class ProductDetailComponent {
  product = PRODUCT;
}

const PRODUCT: Product = {id: 1, title: "Product 1 ", price: 1.2};

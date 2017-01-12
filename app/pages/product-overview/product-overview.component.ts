import {Component, Injectable} from '@angular/core';
import {Product} from '../../model/product'
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ProductService} from "../../service/product.service";
@Component({
  moduleId: module.id,
  selector: 'product-overview-component',
  templateUrl: 'product-overview.component.html',
  providers: [ProductService]
})
@Injectable()
export class ProductOverviewComponent {
  title = "Overview Of Products";
  search_title = "";
  filter_by = "default";
  filter_options = ['name', 'price'];
  products = [];

  bikes = true;
  parts = true;
  clothes = true;
  misc = true;


  constructor(private http: Http, private productService: ProductService) {
    this.productService.getActiveProducts()
      .then(products => {
        this.products = products;
      });
  }

  ngAfterViewInit() {
    $('select').material_select();
  }
}

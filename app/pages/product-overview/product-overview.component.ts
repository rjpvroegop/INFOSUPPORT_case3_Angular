import {Component, Injectable} from '@angular/core';
import {Product} from '../../model/product'
import {Http, Response, Headers, RequestOptions} from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'product-overview-component',
  templateUrl: 'product-overview.component.html',
})
@Injectable()
export class ProductOverviewComponent {
  productUrl = "http://localhost:10001/bscatalogusbeheer/catalog/activeproducts ";
  title = "Overview Of Products";
  search_title = "";
  filter_by = "default";
  filter_options = ['name', 'price'];
  products = [];

  bikes = true;
  parts = true;
  clothes = true;
  misc = true;


  constructor(private http: Http) {
    this.getProducts();
  }

  ngAfterViewInit(){
    $('select').material_select();
  }

  getProducts(){

    this.http.get(this.productUrl)
      .subscribe(
        this.extractProducts.bind(this)
      );
  }

  extractProducts(res){
    let body = res.json();

    this.products = body.map(product => {
      product = <Product> product;
      return product;
    });
  }
}

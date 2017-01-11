import {Component} from "@angular/core";
import {Product} from "../../model/product";
import {Http} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'product-detail-component',
  templateUrl: 'product-detail.component.html',
})

export class ProductDetailComponent {
  productUrl: string = "http://localhost:10001/bscatalogusbeheer/catalog/products/";
  product: any = {
    supplier: {}
  };
  private sub: any;

  constructor(private http: Http, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];

      this.getProduct(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProduct(id:string) {
    this.http.get(this.productUrl + id)
      .subscribe(
        this.extractProduct.bind(this)
      );
  }
  extractProduct(res) {
    let body = res.json();
    console.log(<Product> body);
    this.product = <Product> body;
  }
}

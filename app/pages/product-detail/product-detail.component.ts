import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  moduleId: module.id,
  selector: 'product-detail-component',
  templateUrl: 'product-detail.component.html',
  providers: [ProductService]
})

export class ProductDetailComponent {
  product: any = {
    supplier: {}
  };

  private sub: any;

  constructor(private http: Http, private route: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];


      this.productService.getProduct(id)
        .then(product => {
          console.log(product)
          this.product = product;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

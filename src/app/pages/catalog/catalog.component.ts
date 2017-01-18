import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {SupplierService} from "../../services/supplier.service";
import {Supplier} from "../../models/supplier";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'catalog-page',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css']
})
export class CatalogComponent {
  products: Product[] = [];
  suppliers: Supplier[] = [];
  categories: Category[] = [];
  sort_options: string[] = ['name', 'price'];
  sort_rule: string = '';
  search_term: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService, private supplierService: SupplierService, private categoryService: CategoryService) {

    this.route.params.subscribe(params => {
      if (params['category'] != undefined) {
        this.categoryService.getCategoriesForCategory(params['category'])
          .then(categories => {
            this.categories = <Category[]> categories;
            if (this.categories.length == 0)
              this.getCategories();
          });
      }else{
        this.getCategories();
      }


    });


    this.productService.getActiveProducts()
      .then(products => {
        this.products = <Product[]> products;
      });

    this.supplierService.getSuppliers()
      .then(suppliers => {
        this.suppliers = <Supplier[]> suppliers;
      });
  }
  private getCategories(){
    this.categoryService.getCategories()
      .then(categories => {
        this.categories = <Category[]> categories;
      });
  }
}

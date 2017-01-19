import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Supplier} from "../models/supplier";
import {environment} from "../../environments/environment";
import {Category} from "../models/category";

@Injectable()
export class CategoryService {
  private categoriesUrl = environment.url + "/bscatalogusbeheer/categories";
  constructor(private http: Http) {
  }

  getCategories() {
    return new Promise((res, rej) => {
      this.http.get(this.categoriesUrl)
        .subscribe(
          (data) => res(this.extractCategories(data))
        );
    })
  }

  getCategoriesForCategory(category) {
    return new Promise((res, rej) => {
      this.http.get(this.categoriesUrl + "/" + category)
        .subscribe(
          (data) => res(this.extractCategories(data))
        );
    })
  }

  extractCategories(res) {
    let body = res.json();

    let categories = body.map(category => {
      category = <Category> category;
      category.state = false;
      return category;
    });

    return categories;
  }
}

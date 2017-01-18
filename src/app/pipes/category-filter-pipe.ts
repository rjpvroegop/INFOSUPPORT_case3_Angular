import {Pipe, PipeTransform} from "@angular/core";
import {Supplier} from "../models/supplier";
import {Category} from "../models/category";

@Pipe({
  name: "categoryfilter",
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {
  transform(values: any, categories: Category[]): any[] {
    return values.filter((product) => {

      let isValidForCategory = true;

      product.categoryList.forEach(productcategory => {
        categories.forEach(category => {
          if ((productcategory.id == category.id) && !category.state){
            isValidForCategory = category.state
          }
        });
      });

      return isValidForCategory;
    });
  }
}

import {Pipe, PipeTransform} from "@angular/core";
import {Category} from "../models/category";

@Pipe({
  name: "categoryfilter",
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {
  transform(values: any, categories: Category[]): any[] {
    let nothingChecked = true
    categories.forEach(category => {
      category.productCount = 0;
      if (category.state)
        nothingChecked = false
    });

    values.forEach((product)=> {
      product.categoryList.forEach(productcategory => {
        categories.forEach(category => {
          if ((productcategory.id == category.id)){
            category.productCount ++;
          }
        });
      });
    });

    let products;
    if (nothingChecked){
      products = values.filter((product) => {

        let isValidForCategory = false;

        product.categoryList.forEach(productcategory => {
          categories.forEach(category => {
            if ((productcategory.id == category.id)) {
                isValidForCategory = true
            }
          });
        });

        return isValidForCategory;
      });
    }else {

      products = values.filter((product) => {

        let isValidForCategory = false;

        product.categoryList.forEach(productcategory => {
          categories.forEach(category => {
            if ((productcategory.id == category.id)) {
              if (category.state)
                isValidForCategory = category.state

            }
          });
        });

        return isValidForCategory;
      });
    }
    return products
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import {Supplier} from "../models/supplier";

@Pipe({
  name: "category",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(values: any, bikes: boolean, parts: boolean, clothes: boolean, misc: boolean, suppliers: Supplier[]): any[] {
    return values.filter((item) => {
      let [bikeId, partId, clothesId, miscId] = [1, 2, 3, 4];

      let isValidForCategory = false;

      item.categoryList.forEach(category => {
        if (category.id == bikeId) {
          isValidForCategory = bikes;
        } else if (category.id == partId) {
          isValidForCategory = parts;
        } else if (category.id == clothesId) {
          isValidForCategory = clothes;
        } else if (category.id == miscId) {
          isValidForCategory = misc;
        }
      });

      let isValidForSupplier = false;

      suppliers.forEach(supplier => {
        if (item.supplier.id == supplier.id){
          isValidForSupplier = supplier.state
        }
      })

      return isValidForCategory && isValidForSupplier;
    });
  }
}

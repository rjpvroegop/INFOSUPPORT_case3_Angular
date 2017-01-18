import {Pipe, PipeTransform} from "@angular/core";
import {Supplier} from "../models/supplier";
import {Category} from "../models/category";

@Pipe({
  name: "supplierfilter",
  pure: false
})
export class SupplierFilterPipe implements PipeTransform {
  transform(values: any, suppliers: Supplier[]): any[] {
    return values.filter((item) => {

      let isValidForSupplier = false;

      suppliers.forEach(supplier => {
        if (item.supplier.id == supplier.id){
          isValidForSupplier = supplier.state
        }
      });

      return isValidForSupplier;
    });
  }
}

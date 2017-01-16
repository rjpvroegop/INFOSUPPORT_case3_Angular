import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../models/product";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(values: Product[], key_title: string): any[] {

    return values.filter((item: Product) => {
      let foundName = this.findString(item.name, key_title);
      let foundPrice = this.findString(String(item.price), key_title);
      let foundSupplier = this.findString(item.supplier.name, key_title);

      return foundName || foundPrice || foundSupplier;
    });
  }

  findString(original: string, searchterm: string) {
    return Boolean(
      ~original.toLowerCase()
        .indexOf(searchterm.toLowerCase())
    );
  }
}

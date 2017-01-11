import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../model/product'

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(values: Product[], key_title: string): any[] {
    return values.filter((item) => {
      return (
        Boolean(
          ~item.title.toLocaleLowerCase().indexOf(key_title.toLocaleLowerCase()) ||
          ~String(item.price).indexOf(String(key_title))
        )
      )
    });
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(values: any, key_title: string): any[] {
    return values.filter((item) => {
      console.log(item);
      return (
        Boolean(
          ~item.name.toLocaleLowerCase().indexOf(key_title.toLocaleLowerCase()) ||
          ~String(item.price).indexOf(String(key_title))
        )
      )
    });
  }
}

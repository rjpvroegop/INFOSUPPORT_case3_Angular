import { Pipe,PipeTransform  } from '@angular/core';
import { Product } from '../model/product'

@Pipe({
    name : "search"
})
export class SearchPipe implements PipeTransform{
    transform(values : Product[], key_title : string): any[]{
        return values.filter((item) => item.title.toLocaleLowerCase().startsWith(key_title.toLocaleLowerCase()));
    }
}
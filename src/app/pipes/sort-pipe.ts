import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../models/product";

@Pipe({
    name: "sort"
})
export class SortPipe implements PipeTransform {
    transform(values: Product[], key_title: string): Product[] {

        values.sort((a : Product, b: Product) => {
            if(a[key_title] < b[key_title]){
                return -1;
            } else if(a[key_title] > b[key_title]){
                return 1;
            } else {
                return 0;
            }
        });

        return values;
    }
}

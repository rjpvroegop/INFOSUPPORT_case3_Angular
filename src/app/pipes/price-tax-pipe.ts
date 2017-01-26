import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "tax"
})
export class TaxPipe implements PipeTransform {
  transform(price: number): number {
    return Number((price * 1.21 - price).toFixed(2));
  }
}

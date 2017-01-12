import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "keys"
})
export class ObjectKeysPipe implements PipeTransform {
  transform(value: any, key_title: string): any[] {
    return Object.keys(value);
  }
}

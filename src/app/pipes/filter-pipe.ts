import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "category"
})
export class FilterPipe implements PipeTransform {
  transform(values: any, bikes: boolean, parts: boolean, clothes: boolean, misc: boolean): any[] {
    return values.filter((item) => {
      let isValidForThisFilter = false;

      item.categoryList.forEach(category => {
        if (category.id == 1) {
          isValidForThisFilter = bikes;
        } else if (category.id == 2) {
          isValidForThisFilter = parts;
        } else if (category.id == 3) {
          isValidForThisFilter = clothes;
        } else if (category.id == 4) {
          isValidForThisFilter = misc;
        }
      });

      return isValidForThisFilter;
    });
  }
}

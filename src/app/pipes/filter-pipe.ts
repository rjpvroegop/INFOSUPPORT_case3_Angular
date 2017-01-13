import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "category"
})
export class FilterPipe implements PipeTransform {
  transform(values: any, bikes: boolean, parts: boolean, clothes: boolean, misc: boolean): any[] {
    return values.filter((item) => {
      let [bikeId, partId, clothesId, miscId] = [1, 2, 3, 4];

      let isValidForThisFilter = false;

      item.categoryList.forEach(category => {
        if (category.id == bikeId) {
          isValidForThisFilter = bikes;
        } else if (category.id == partId) {
          isValidForThisFilter = parts;
        } else if (category.id == clothesId) {
          isValidForThisFilter = clothes;
        } else if (category.id == miscId) {
          isValidForThisFilter = misc;
        }
      });

      return isValidForThisFilter;
    });
  }
}

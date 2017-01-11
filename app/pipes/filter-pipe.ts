import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "category"
})
export class FilterPipe implements PipeTransform {
  transform(values: any, key_title: string): any[] {
    return values.filter((item) => {
      let isValidForThisFilter = false;

      item.categoryList.forEach(category => {
        if(category.id == key_title){
          isValidForThisFilter = true;
        }
      });

      return isValidForThisFilter;
    });
  }
}

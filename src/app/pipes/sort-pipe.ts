import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "sort"
})
export class SortPipe implements PipeTransform {
    transform(values: any, key_title: string): any[] {

        //let sortables = values.map(value => [value, value.title]);

        //sortables.sort((a,b)=>a[1]-b[1]);

        values.sort((a : any, b: any) => {
            if(a[key_title] < b[key_title]){
                return -1;
            } else if(a[key_title] > b[key_title]){
                return 1;
            } else {
                return 0;
            }
        });
        //let x = sortables.map(value => value[0]);
        console.log(values);
        return values;
    }
}

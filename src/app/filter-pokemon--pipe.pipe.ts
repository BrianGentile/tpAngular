import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe',
  pure:false
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        if (typeof property !== 'undefined' && typeof searchString !== "undefined") {

        return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;

        }
      return e;
      });
      
    } else {
      return [];
    }
  }

}

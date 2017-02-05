import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagify'
})
export class ImagifyPipe implements PipeTransform {
  private imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  transform(value: any, args?: any): any {
    return `${this.imgBaseUrl}${String(value)}.png`;
  }

}

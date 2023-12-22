import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primos'
})
export class PrimosPipe implements PipeTransform {

  transform(value:any, ...args:any): any {
    let arrPrimos = [];
    let cantDivisores = 0;
    if (value != null) {
      for (let a = 0; a < value.length; a++) {
        for (let b = 0; b < value.length; b++) {
          value[a] % value[b] === 0 ? cantDivisores++: ''
        }
        cantDivisores === 2 ? arrPrimos.push(value[a]) : ''
        cantDivisores = 0;
      }
    }
    return arrPrimos;
  }
}
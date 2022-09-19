import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicar',
})
export class MultiplicarPipe implements PipeTransform {
  transform(value: number, args?: any): number {
    let x = parseFloat(args);
    return value * x;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  transform(value: number, digits: number) {
    return Math.round(value * digits) / digits;
  }
}

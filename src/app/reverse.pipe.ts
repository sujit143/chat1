import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }
  transform(value: string): string {
    let newStr: string = '';
    for ( var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }

}

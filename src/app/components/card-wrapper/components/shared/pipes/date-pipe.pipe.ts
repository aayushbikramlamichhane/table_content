import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipePipe implements PipeTransform {
  transform(value: any): any {
    return new Date(value).toLocaleString('default', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
  }
}

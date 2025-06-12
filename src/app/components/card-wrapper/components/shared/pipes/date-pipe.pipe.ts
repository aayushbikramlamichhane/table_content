import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipePipe implements PipeTransform {
  transform(value: string): string | Date | number {
    return new Date(value).toLocaleString('default', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

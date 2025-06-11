import { Pipe, PipeTransform } from '@angular/core';
import { DatePipePipe } from './date-pipe.pipe';

@Pipe({
  name: 'dynamicPipe',
})
export class DynamicPipePipe implements PipeTransform {
  private dateConverter(value: string) {
    return new Date(value).toLocaleString('default', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  private convertToUpperCase(value: string) {
    return value.charAt(0) + value.slice(1);
  }

  transform(value: string, pipeName: string): unknown {
    switch (pipeName) {
      case 'datePipe':
        // return this.dateConverter(value)
        const datePipe = new DatePipePipe();
        return datePipe.transform(value);

      case 'upperCase':
        return this.convertToUpperCase(value);

      default:
        return value;
    }
  }
}

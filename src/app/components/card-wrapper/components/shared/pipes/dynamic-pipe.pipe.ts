import { Injector, Pipe, PipeTransform } from '@angular/core';
import { DatePipePipe } from './date-pipe.pipe';

@Pipe({
  name: 'dynamicPipe',
})
export class DynamicPipePipe implements PipeTransform {

  private convertToUpperCase(value: string) {
    return value.charAt(0) + value.slice(1).toLowerCase();
  }

  transform(value: string, pipeName: string): unknown {
    switch (pipeName) {
      case 'datePipe':
        const datePipe = new DatePipePipe();
        return datePipe.transform(value);

      case 'upperCase':
        return this.convertToUpperCase(value);

      default:
        return value;
    }
  }
}

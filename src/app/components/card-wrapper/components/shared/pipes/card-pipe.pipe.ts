import { Pipe, PipeTransform } from '@angular/core';
import { DatePipePipe } from '../../../../../shared/pipes/date-pipe.pipe';
import { UpperCasePipe } from '../../../../../shared/pipes/upper-case.pipe';


@Pipe({
  name: 'cardPipe',
})
export class CardPipePipe implements PipeTransform {


  transform(value: string, pipeName: string): unknown {
    switch (pipeName) {
      case 'datePipe':
        const datePipe = new DatePipePipe();
        return datePipe.transform(value);

      case 'upperCase':
        const upperPipe = new UpperCasePipe();
        return upperPipe.transform(value)

      default:
        return value;
    }
  }
}

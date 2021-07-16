import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(value:any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date (today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(value-todayWithNoTime);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.01;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >=1 && value > todayWithNoTime){
      return dateCounter;
    }else
    return 0;
  }

}

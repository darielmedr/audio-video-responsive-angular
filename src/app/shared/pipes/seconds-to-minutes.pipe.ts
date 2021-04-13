import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinutes'
})
export class SecondsToMinutesPipe implements PipeTransform {

  transform(duration: number): string {
    const hours: number = Math.floor(duration / (60 * 60));
    const minutes: number = Math.floor(duration / 60) - (hours * 60);
    const seconds: number = duration % 60;

    const MM: string = minutes.toString().padStart(2, '0');
    const SS: string = seconds.toString().padStart(2, '0');

    if (hours > 0) {
      const HH: string = hours.toString().padStart(2, '0');
      return `${HH}:${MM}:${SS}`;
    }

    return `${MM}:${SS}`;
  }

}

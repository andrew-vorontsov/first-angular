import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number) {
    if (!duration || duration < 0) {
      return null;
    }

    duration = duration / 1000 / 60;
    duration = Math.ceil(duration);

    if (duration >= 60) {
      const durationHours = Math.floor(duration / 60);
      const durationMins = Math.round(duration - durationHours * 60);
      return durationHours + ' h ' + durationMins + ' min';
    }
    return Math.round(duration) + ' min';
  }
}

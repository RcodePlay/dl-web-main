import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByType',
  standalone: true,
})
export class FilterByTypePipe implements PipeTransform {
  transform(events: any[], typesToExclude: string[]): any[] {
    if (!events || !typesToExclude || typesToExclude.length === 0) {
      return events;
    }
    return events.filter((event) => !typesToExclude.includes(event.type));
  }
}

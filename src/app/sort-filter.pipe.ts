import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {
  transform(items: any, type: string): any {
    if (type === "asc") {
      return items.sort((a: any, b: any) => a.price - b.price)
    } else if (type === "desc") {
      return items.sort((a: any, b: any) => b.price - a.price)
    } else {
      return items;
    }
  }
}

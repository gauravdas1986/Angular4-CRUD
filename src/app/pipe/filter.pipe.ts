import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toString().toLowerCase();
        return items.filter(singleItem1 =>
            singleItem1[field].toLowerCase().includes(searchText.toLowerCase())
        );
    }
}
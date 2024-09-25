import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tariff } from '../../models/tariff.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() sortAttribute: keyof Tariff = 'price';
  @Input() sortDirection: 'asc' | 'desc' = 'asc';
  @Output() sort = new EventEmitter<keyof Tariff>();

  onSort(attribute: keyof Tariff): void {
    this.sort.emit(attribute);
  }

  getSortIndicator(attribute: keyof Tariff): string {
    if (this.sortAttribute === attribute) {
      return this.sortDirection === 'asc' ? '▲' : '▼';
    }
    return '';
  }
}

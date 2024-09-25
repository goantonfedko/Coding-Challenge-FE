import { Component, OnInit } from '@angular/core';
import { TariffService } from '../../services/tariff.service';
import { Tariff } from '../../models/tariff.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit {
  tariffs: Tariff[] = [];
  filteredTariffs: Tariff[] = [];
  sortAttribute: keyof Tariff = 'price';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffService.getTariffs().subscribe((data) => {
      this.tariffs = data;
      this.filteredTariffs = [...this.tariffs];
    });
  }

  onSort(attribute: keyof Tariff): void {
    if (this.sortAttribute === attribute) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortAttribute = attribute;
      this.sortDirection = 'asc';
    }

    this.filteredTariffs.sort((a, b) => {
      const valA = a[attribute];
      const valB = b[attribute];
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
}

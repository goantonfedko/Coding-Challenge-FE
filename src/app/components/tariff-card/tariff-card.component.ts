import { Component, Input } from '@angular/core';
import { Tariff } from '../../models/tariff.model';

@Component({
  selector: 'app-tariff-card',
  templateUrl: './tariff-card.component.html',
  styleUrls: ['./tariff-card.component.scss'],
})

export class TariffCardComponent {
  @Input() tariff!: Tariff;
  @Input() index!: number;

  showAll: boolean = false;

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}

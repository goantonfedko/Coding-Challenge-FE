import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultListComponent } from './result-list.component';
import { FiltersComponent } from '../filters/filters.component';
import { TariffCardComponent } from '../tariff-card/tariff-card.component';
import { TariffService } from '../../services/tariff.service';
import { of } from 'rxjs';
import { Tariff } from '../../models/tariff.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;
  let tariffService: TariffService;

  const mockTariffs: Tariff[] = [
    { id: 1, name: 'Basic', downloadSpeed: 50, uploadSpeed: 20, advantages: [], price: 29.99 },
    { id: 2, name: 'Premium', downloadSpeed: 100, uploadSpeed: 50, advantages: [], price: 49.99 },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ResultListComponent,
        FiltersComponent,
        TariffCardComponent,
      ],
      imports: [CommonModule, HttpClientTestingModule],
      providers: [TariffService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    tariffService = TestBed.inject(TariffService);

    spyOn(tariffService, 'getTariffs').and.returnValue(of(mockTariffs));
    fixture.detectChanges();
  });

  it('should create and fetch tariffs', () => {
    expect(component).toBeTruthy();
    expect(component.tariffs.length).toBe(2);
  });

  it('should sort tariffs when onSort is called', () => {
    component.onSort('price');
    expect(component.sortAttribute).toBe('price');
    expect(component.sortDirection).toBe('desc');

    component.onSort('price');
    expect(component.sortDirection).toBe('asc');
  });
});

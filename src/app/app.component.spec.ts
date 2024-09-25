import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TariffCardComponent } from './components/tariff-card/tariff-card.component';
import { TariffService } from './services/tariff.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ResultListComponent,
        FiltersComponent,
        TariffCardComponent,
      ],
      imports: [HttpClientTestingModule],
      providers: [TariffService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

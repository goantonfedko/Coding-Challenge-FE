import { TestBed } from '@angular/core/testing';
import { TariffService } from './tariff.service';

describe('TariffService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tariffs', (done: DoneFn) => {
    service.getTariffs().subscribe((tariffs) => {
      expect(tariffs.length).toBeGreaterThan(0);
      done();
    });
  });
});

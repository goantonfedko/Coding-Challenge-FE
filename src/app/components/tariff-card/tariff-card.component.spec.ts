import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffCardComponent } from './tariff-card.component';
import { Tariff } from '../../models/tariff.model';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('TariffCardComponent', () => {
  let component: TariffCardComponent;
  let fixture: ComponentFixture<TariffCardComponent>;

  const mockTariff: Tariff = {
    id: 1,
    name: 'Premium Plan',
    downloadSpeed: 100,
    uploadSpeed: 50,
    advantages: ['Unlimited Data', 'No Contract'],
    price: 49.99,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TariffCardComponent],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffCardComponent);
    component = fixture.componentInstance;
    component.tariff = mockTariff;
    component.index = 1;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct index number', () => {
    const numberEl = fixture.debugElement.query(By.css('.tariff-card__number')).nativeElement;
    expect(numberEl.textContent).toContain('1');
  });

  it('should display tariff details correctly', () => {
    const nameEl = fixture.debugElement.query(By.css('.tariff-card__name')).nativeElement;
    expect(nameEl.textContent).toContain('Premium Plan');
  });

  it('should display the correct download speed', () => {
    const downloadSpeedEl = fixture.debugElement.query(By.css('.speed-item--download .speed-item__text')).nativeElement;
    expect(downloadSpeedEl.textContent).toContain('100 Mbit/s');
  });

  it('should display the correct upload speed', () => {
    const uploadSpeedEl = fixture.debugElement.query(By.css('.speed-item--upload .speed-item__text')).nativeElement;
    expect(uploadSpeedEl.textContent).toContain('50 Mbit/s');
  });

  it('should display the correct price', () => {
    const priceEl = fixture.debugElement.query(By.css('.tariff-card__price')).nativeElement;
    expect(priceEl.textContent).toContain('49.99 €');
  });
});

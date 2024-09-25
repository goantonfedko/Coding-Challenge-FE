import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { TariffCardComponent } from './components/tariff-card/tariff-card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TariffService } from './services/tariff.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ResultListComponent,
    TariffCardComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [TariffService],
  bootstrap: [AppComponent],
})
export class AppModule {}

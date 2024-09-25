import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tariff } from '../models/tariff.model';

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  constructor() {}

  getTariffs(): Observable<Tariff[]> {
    const tariffs: Tariff[] = [
      {
        id: 1,
        name: "Economic plan",
        downloadSpeed: 50,
        uploadSpeed: 50,
        advantages: [
          'Connection within 1.5 months (if you’re lucky)',
          'Technician will show up without any notice (hope you’re home!)',
          'Won’t even install the router (good luck with that)',
          'No data cap (not that you’ll reach it)',
        ],
        price: 29.99,
      },
      {
        id: 2,
        name: 'Standard Plan',
        downloadSpeed: 100,
        uploadSpeed: 100,
        advantages: [
          'No data cap (stream all weekend long!)',
          'Priority support (you skip the line!)',
          'Free installation (no need to bribe the tech guy)',
        ],
        price: 49.99,
      },
      {
        id: 3,
        name: 'Premium Plan',
        downloadSpeed: 512,
        uploadSpeed: 512,
        advantages: [
          'Unlimited data (because limits are boring)',
          'Dedicated support (they even know your name!)',
          'Premium router (it glows in the dark)',
        ],
        price: 69.99,
      },
      {
        id: 4,
        name: 'Premium Plan+',
        downloadSpeed: 1000,
        uploadSpeed: 500,
        advantages: [
          'Unlimited data (seriously, it’s endless)',
          'One-week home installation (lightning-fast setup)',
          'Dedicated support (you get a personal tech wizard)',
          'Latest premium router (it’s smarter than your TV)',
        ],
        price: 89.99,
      },
      {
        id: 5,
        name: 'NASA',
        downloadSpeed: 10000,
        uploadSpeed: 1000,
        advantages: [
          'Download a PS5 game in one minute (no joke)',
          'Dedicated support (your personal mission control)',
          'Premium router (probably overkill, but why not?)',
        ],
        price: 189.99,
      },
    ];
    return of(tariffs);
  }
}

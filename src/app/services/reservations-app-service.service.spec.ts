import { TestBed } from '@angular/core/testing';

import { ReservationsAppServiceService } from './reservations-app-service.service';

describe('ReservationsAppServiceService', () => {
  let service: ReservationsAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationsAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

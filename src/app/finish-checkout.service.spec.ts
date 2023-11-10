import { TestBed } from '@angular/core/testing';

import { FinishCheckoutService } from './finish-checkout.service';

describe('FinishCheckoutService', () => {
  let service: FinishCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinishCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

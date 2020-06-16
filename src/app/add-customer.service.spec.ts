import { TestBed } from '@angular/core/testing';

import { AddCustomerService } from './add-customer.service';

describe('AddCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCustomerService = TestBed.get(AddCustomerService);
    expect(service).toBeTruthy();
  });
});

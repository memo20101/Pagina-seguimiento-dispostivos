import { TestBed } from '@angular/core/testing';

import {ServiceNameService  } from './service.service';

describe('ServiceService', () => {
  let service: ServiceNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

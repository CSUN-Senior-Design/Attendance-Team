import { TestBed } from '@angular/core/testing';

import { TestingDataService } from './testing-data.service';

describe('TestingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestingDataService = TestBed.get(TestingDataService);
    expect(service).toBeTruthy();
  });
});

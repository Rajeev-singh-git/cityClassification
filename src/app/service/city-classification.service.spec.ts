import { TestBed } from '@angular/core/testing';

import { CityClassificationService } from './city-classification.service';

describe('CityClassificationService', () => {
  let service: CityClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

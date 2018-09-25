import { TestBed, inject } from '@angular/core/testing';

import { ProcessDataService } from './process-data.service';

describe('ProcessDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessDataService]
    });
  });

  it('should be created', inject([ProcessDataService], (service: ProcessDataService) => {
    expect(service).toBeTruthy();
  }));
});

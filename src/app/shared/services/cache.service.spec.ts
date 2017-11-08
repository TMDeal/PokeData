import { TestBed, inject } from '@angular/core/testing';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { CacheService } from './cache.service';

describe('CacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AsyncLocalStorageModule],
      providers: [
        CacheService
      ]
    });
  });

  it('should be created', inject([CacheService], (service: CacheService) => {
    expect(service).toBeTruthy();
  }));
});

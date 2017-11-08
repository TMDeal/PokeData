import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { PokemonService } from './pokemon.service';
import { CacheService } from './cache.service';

describe('PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AsyncLocalStorageModule]
      providers: [
        {
          provide: HttpXhrBackend,
          useClass: MockBackend
        },
        PokemonService,
        CacheService
      ]
    });
  });

  it('should be created', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});

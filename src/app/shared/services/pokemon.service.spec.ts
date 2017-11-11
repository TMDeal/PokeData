import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { Pokemon } from '../models/pokeapi/pokemon/pokemon';
import { NamedResourceList } from '../models/pokeapi/common';

import { PokemonService } from './pokemon.service';
import { CacheService } from './cache.service';

const mockResponse = {
  name: 'bulbasaur'
};

describe('PokemonService', () => {
  let pokemonService: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AsyncLocalStorageModule],
      providers: [
        PokemonService,
        CacheService
      ]
    });
  });

  beforeEach(() => {
    pokemonService = TestBed.get(PokemonService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a pokemon\'s data successfully', async(() => {
    const request = 'bulbasaur';

    const response = {
      name: 'bulbasaur'
    } as Pokemon;

    pokemonService.pokemonRequest(request).subscribe(data => {
      expect(data.name).toBe(request);
    });

    const req = httpMock.expectOne(`${pokemonService.baseUrl}/pokemon/${request}`);
    req.flush(response);

    httpMock.verify();
  }));

  it('should get a list of pokemon endpoints', async(() => {
    const response = {
      count: 949,
      previous: 'null',
      next: 'https://pokeapi.co/api/v2/pokemon/?limit=1&offset=1',
      results: [
        {
          url: 'https://pokeapi.co/api/v2/pokemon/1',
          name: 'bulbasaur'
        }
      ]
    } as NamedResourceList;

    const limit = 1;
    const offset = 0;
    pokemonService.pokemonListRequest(limit, offset).subscribe(data => {
      expect(data.results.length).toEqual(1);
    });

    const req = httpMock.expectOne(
      `${pokemonService.baseUrl}/pokemon/?offset=${offset}&limit=${limit}`);
    req.flush(response);

    httpMock.verify();
  }));
});

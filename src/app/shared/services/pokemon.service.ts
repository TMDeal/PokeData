import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokeapi/pokemon/pokemon';
import { NamedResourceList } from '../models/pokeapi/common';
import { Observable } from 'rxjs/Observable';
import { Cache } from '../cache';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  private protocol = 'https://';
  private baseUrl = `${this.protocol}pokeapi.co/api/v2`;

  constructor(
    private http: HttpClient,
    private cache: AsyncLocalStorage
  ) {}

  getPokemon(id: string): Observable<Pokemon> {
    return Cache<Pokemon>(this.cache, id, () => {
      return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
    });
  }

  getPokemonList(limit: number, offset: number = 0): Observable<NamedResourceList> {
    const params = new HttpParams()
      .set('offset', `${offset}`)
      .set('limit', `${limit}`);

    return Cache<NamedResourceList>(this.cache, `pokemon?offset=${offset}&limit=${limit}`, () => {
      return this.http.get<NamedResourceList>(`${this.baseUrl}/pokemon/`, { params });
    });
  }

  private errorHandler(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.log('An error occurred:', err.error.message);
    } else {
      console.log(`PokeApi returned code ${err.status}, body was: ${err.error}`);
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokeapi/pokemon/pokemon';
import { NamedResourceList } from '../models/pokeapi/common';
import { Observable } from 'rxjs/Observable';
import { Cache } from '../cache';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  private protocol = 'https://';
  private baseUrl = `${this.protocol}pokeapi.co/api/v2`;

  constructor(
    private http: HttpClient,
    private cache: AsyncLocalStorage
  ) {}

  getPokemon(id: string): Observable<Pokemon> {
  return this.cache.getItem<Pokemon>(id)
    .flatMap(localData => {
      if (localData == null) {
          return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`)
            .do(httpData => {
              this.cache.setItem(id, httpData).subscribe();
              return httpData;
            });
      }
      return Observable.of(localData);
    });
  }

  getPokemonList(limit: number, offset: number = 0): Observable<NamedResourceList> {
    const params = new HttpParams()
      .set('offset', `${offset}`)
      .set('limit', `${limit}`);

    const key = `pokemon?offset=${offset}&limit=${limit}`;

    return this.cache.getItem<NamedResourceList>(key)
      .flatMap(localData => {
        if (localData == null) {
          return this.http.get<NamedResourceList>(`${this.baseUrl}/pokemon/`, { params })
            .do(httpData => {
              this.cache.setItem(key, httpData).subscribe();
              return httpData;
            });
        }
        return Observable.of(localData);
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

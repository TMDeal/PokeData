import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokeapi/pokemon/pokemon';
import { NamedResourceList } from '../models/pokeapi/common';
import { Observable } from 'rxjs/Observable';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import { tap, flatMap } from 'rxjs/operators';

import 'rxjs/add/observable/of';

@Injectable()
export class PokemonService {
  private protocol = 'https://';
  private baseUrl = `${this.protocol}pokeapi.co/api/v2`;

  constructor(
    private http: HttpClient,
    private cache: AsyncLocalStorage
  ) {}

  getPokemon(id: string): Observable<Pokemon> {
    return this.cache.getItem<Pokemon>(id).pipe(
      flatMap(localData => {
        if (localData == null) {
            return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`).pipe(
              tap(httpData => {
                this.cache.setItem(id, httpData).subscribe();
                return httpData;
              })
            );
        }
        return Observable.of(localData);
      })
    );
  }

  getPokemonList(limit: number, offset: number = 0): Observable<NamedResourceList> {
    const params = new HttpParams()
      .set('offset', `${offset}`)
      .set('limit', `${limit}`);

    const key = `pokemon?offset=${offset}&limit=${limit}`;

    return this.cache.getItem<NamedResourceList>(key).pipe(
      flatMap(localData => {
        if (localData == null) {
          return this.http.get<NamedResourceList>(`${this.baseUrl}/pokemon/`, { params }).pipe(
            tap(httpData => {
              this.cache.setItem(key, httpData).subscribe();
              return httpData;
            })
          );
        }
        return Observable.of(localData);
      })
    );
  }
}

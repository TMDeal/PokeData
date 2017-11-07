import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon } from '../models/pokeapi/pokemon/pokemon';
import { NamedResourceList } from '../models/pokeapi/common';
import { Observable } from 'rxjs/Observable';
import { CacheService } from './cache.service';

@Injectable()
export class PokemonService {
  private protocol = 'https://';
  private baseUrl = `${this.protocol}pokeapi.co/api/v2`;

  constructor(
    private http: HttpClient,
    private cache: CacheService
  ) {}

  getPokemon(id: string): Observable<Pokemon> {
    const request = this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
    return this.cache.get<Pokemon>(id, request);
  }

  getPokemonList(limit: number, offset: number = 0): Observable<NamedResourceList> {
    const params = new HttpParams()
      .set('offset', `${offset}`)
      .set('limit', `${limit}`);

    const key = `pokemon?offset=${offset}&limit=${limit}`;
    const request = this.http.get<NamedResourceList>(`${this.baseUrl}/pokemon/`, { params });
    return this.cache.get<NamedResourceList>(key, request);
  }
}

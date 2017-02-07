import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ResourceList } from '../interfaces/pokeapi/common';
import { Pokemon } from '../interfaces/pokeapi/pokemon';

import { PokemonPage } from '../interfaces/pokemon-page';

import * as _ from 'lodash';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  private protocol = 'https://';
  private baseUrl = `${this.protocol}pokeapi.co/api/v2/`;
  private maxPokemon = 721;

  constructor(private http: Http) { }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get(`${this.baseUrl}pokemon/${id}`)
      .map((res: Response) => {
        const body: Pokemon = res.json();
        return body || {};
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

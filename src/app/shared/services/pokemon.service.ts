import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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

  getPage(limit = this.maxPokemon, offset = 0): Observable<PokemonPage> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('limit', String(limit));
    params.set('offset', String(offset));

    const options: RequestOptions = new RequestOptions({
      search: params
    });

    return this.http.get(`${this.baseUrl}pokemon`, options)
      .map((res: Response) => {
        const body = res.json();
        const page: PokemonPage = {
          contents: body.results,
          next: body.next,
          previous: body.previous
        };
        _.each(page.contents, (value, index) => {
          value['id'] = (index + 1) + offset;
        });
        return page || {};
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

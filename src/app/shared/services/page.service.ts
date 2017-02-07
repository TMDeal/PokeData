import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ResourceList } from '../interfaces/pokeapi/common';

import { PokemonPage } from '../interfaces/pokemon-page';

import * as _ from 'lodash';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PageService {
  private protocol = 'https://';
  private baseUrl = `${this.protocol}pokeapi.co/api/v2/`;

  private maxPokemon = 721;
  private pageSize = 18;
  private currentPage = 1;

  constructor(
    private http: Http
  ) { }

  getPage(index = this.currentPage): Observable<PokemonPage> {
    const params: URLSearchParams = new URLSearchParams();
    const offset = (index - 1) * this.pageSize;
    params.set('limit', String(this.pageSize));
    params.set('offset', String(offset));

    const options: RequestOptions = new RequestOptions({
      search: params
    });

    return this.http.get(`${this.baseUrl}pokemon`, options)
      .map(this.extractPage)
      .do(() => this.currentPage = offset === 0 ? 1 : (offset / this.pageSize) + 1)
      .map(page => {
        page.current = this.currentPage;
        page.size = this.pageSize;
        page.collectionSize = this.maxPokemon;
        return page;
      })
      .catch(this.handleError);
  }

  private extractPage(res: Response): PokemonPage {
    const body = res.json();
    const url = new URL(res.url);
    const params: URLSearchParams = new URLSearchParams(url.search);

    const page: PokemonPage = {
      contents: body.results
    };

    _.each(page.contents, (value, index) => {
      value['id'] = (index + 1) + +params.get('offset');
    });

    return page;
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

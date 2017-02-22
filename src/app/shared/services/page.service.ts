import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ResourceList } from '../interfaces/pokeapi/common';

import { Page } from '../interfaces/pages';
import { PokemonPageItem } from '../interfaces/pokemon-page-item';

import * as _ from 'lodash';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PageService {
  private protocol = 'https://';
  private baseUrl = `${this.protocol}pokeapi.co/api/v2`;

  private pageSize = 18;

  constructor(
    private http: Http
  ) { }

  getPage<PageItemType>(resource: string, index: number): Observable<Page<PageItemType>> {
    const params: URLSearchParams = new URLSearchParams();
    const offset = (index - 1) * this.pageSize;
    params.set('limit', String(this.pageSize));
    params.set('offset', String(offset));

    const options: RequestOptions = new RequestOptions({
      search: params
    });

    return this.http.get(`${this.baseUrl}/${resource}`, options)
      .map((res: Response) => {
        const body = res.json();
        const page: Page<PageItemType> = {
          contents: body.results,
          collectionSize: body.count
        };
        return page;
      })
      .switchMap(page => {
        return this.http.get(`/assets/${resource}.json`)
          .map((res: Response) => {
            const body = res.json();
            _.each(page.contents, (value, i) => {
              value['id'] = body[value['name']]['id'];
              value['sprites'] = body[value['name']]['sprites'];
            });
            return page;
          });
      })
      .do(() => index = offset === 0 ? 1 : (offset / this.pageSize) + 1)
      .map(page => {
        page.current = index;
        page.size = this.pageSize;
        return page;
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

import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

import { ResourceList } from '../interfaces/pokeapi/common';
import { Move } from '../interfaces/pokeapi/moves';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MoveService {
  private protocol = 'https://';
  private baseUrl = `${this.protocol}pokeapi.co/api/v2/`;
  private maxMoves = 639;

  constructor(private http: Http) { }

  getMoves(limit = this.maxMoves, offset = 0): Observable<ResourceList> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('limit', String(limit));
    params.set('offset', String(offset));

    const options: RequestOptions = new RequestOptions({
      search: params
    });

    return this.http.get(`${this.baseUrl}move`, options)
      .map((res: Response) => {
        const body: ResourceList = res.json();
        return body;
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

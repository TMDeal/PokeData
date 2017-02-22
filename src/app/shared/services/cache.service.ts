import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class CacheService {
  private cache = {};

  constructor(private http: Http) { }

  get(resource: string, name?: string) {
    if (this.cache[resource]) {
      if (name) {
        return Observable.of(this.cache[resource][name]);
      } else {
        return Observable.of(this.cache[resource]);
      }
    } else {
      return this.http.get(`/assets/${resource}.json`)
        .map((res: Response) => {
          const body = res.json();
          this.cache[resource] = body;
          if (name) {
            return body[name];
          }
          return body;
        })
        .catch(this.handleError);
    }
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

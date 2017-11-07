import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs/Observable';
import { tap, flatMap } from 'rxjs/operators';

import 'rxjs/add/observable/of';

@Injectable()
export class CacheService {

  constructor(
    private cache: AsyncLocalStorage
  ) {}

  get<Type>(key: string, request: Observable<Type>): Observable<Type> {
    return this.cache.getItem<Type>(key).pipe(
      flatMap(localData => {
        if (localData == null) {
          return request.pipe(
            tap(httpData => {
              return this.set(key, httpData);
            })
          );
        }
        return Observable.of(localData);
      })
    );
  }

  set<Type>(key: string, value: Type): Type {
    this.cache.setItem(key, value).subscribe();
    return value;
  }

}

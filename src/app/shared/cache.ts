import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

export function Cache<Type>(
  cache: AsyncLocalStorage, key: string,
  callback: () => Observable<Type>
): Observable<Type> {
  return cache.getItem<Type>(key)
    .flatMap(localData => {
      if (localData == null) {
          return callback()
            .do(httpData => {
              cache.setItem(key, httpData).subscribe();
              return httpData;
            });
      }
      return Observable.of(localData);
    });
}

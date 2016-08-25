import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

export function createRxStore(reducer, initialState) {
  var action$ = new Subject();
  var state$ = action$.startWith(initialState).scan(reducer);
  return {
    action$,
    state$,
    dispatch: action => action$.next(action),
    subscribe: (...args) => state$.subscribe(...args)
  };
}

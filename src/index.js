import {Subject} from 'rxjs/Subject';

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

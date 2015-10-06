import {Subject} from 'rx';

export function createRxStore(reducer, initialState) {
  var action$ = new Subject();
  var state$ = action$.startWith(initialState).scan(reducer);
  return {
    action$,
    state$,
    dispatch: action => action$.onNext(action),
    subscribe: (...args) => state$.subscribe(...args)
  };
}

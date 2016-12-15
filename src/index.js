import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export function createRxStore(reducer, initialState) {
  const state$ = new BehaviorSubject(initialState);
  return {
    state$,
    dispatch: action => state$.next(reducer(state$.value, action)),
    subscribe: (...args) => state$.subscribe(...args)
  };
}

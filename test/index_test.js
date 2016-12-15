import {assert} from 'chai';
import sinon from 'sinon';
import {createRxStore} from '../src';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
}

const initialState = 0;

describe('createRxStore', () => {
  describe('state$', () => {
    it('returns raw state stream', () => {
      const {state$} = createRxStore(reducer, initialState);
      assert.equal(typeof state$.subscribe, 'function');
    });
  });

  describe('subscribe', () => {
    it('starts with the initialState', () => {
      const store = createRxStore(reducer, initialState);
      const states = [];
      const subscription = store.subscribe(data => states.push(data));
      assert.equal(states.join(''), '0');
      subscription.unsubscribe();
    });

    it('keeps state in sync between subscribers', () => {
      const store = createRxStore(reducer, initialState);
      const states = [];
      const states2 = [];
      const subscription = store.subscribe(data => states.push(data));
      const subscription2 = store.subscribe(data => states2.push(data));
      store.dispatch({type: 'ADD', payload: 2});
      store.dispatch({type: 'DECREMENT', payload: 4});
      store.dispatch({type: 'ADD', payload: 10});

      assert.equal(states.join(' '), '0 2 -2 8');
      assert.equal(states2.join(' '), '0 2 -2 8');

      subscription.unsubscribe();
      subscription2.unsubscribe();
    });

    it('subscriptions can be unsubscribed', () => {
      const store = createRxStore(reducer, initialState);
      const states = [];
      const subscription = store.subscribe(data => states.push(data));
      store.dispatch({type: 'ADD', payload: 2});
      store.dispatch({type: 'ADD', payload: 10});
      subscription.unsubscribe();
      store.dispatch({type: 'ADD', payload: 2});

      assert.equal(states.join(' '), '0 2 12');
    });

    it('new subscribers start with the current state', () => {
      const store = createRxStore(reducer, initialState);
      const states = [];
      const states2 = [];
      const states3 = [];
      const subscription = store.subscribe(data => states.push(data));
      store.dispatch({type: 'ADD', payload: 2});
      store.dispatch({type: 'DECREMENT', payload: 4});
      const subscription2 = store.subscribe(data => states2.push(data));
      store.dispatch({type: 'ADD', payload: 10});
      const subscription3 = store.subscribe(data => states3.push(data));
      store.dispatch({type: 'DECREMENT', payload: 2});

      assert.equal(states.join(' '), '0 2 -2 8 6');
      assert.equal(states2.join(' '), '-2 8 6');
      assert.equal(states3.join(' '), '8 6');

      subscription.unsubscribe();
      subscription2.unsubscribe();
      subscription3.unsubscribe();
    });
  });

  describe('dispatch', () => {
    it('calls reducer once on each action dispatched', () => {
      const reducer = (state, action) => state;
      const spy = sinon.spy(reducer);
      const store = createRxStore(spy, initialState);
      const subscription = store.subscribe();

      store.dispatch();
      assert.equal(spy.callCount, 1);
      store.dispatch({data: 'test'});
      assert.equal(spy.callCount, 2);

      subscription.unsubscribe();
    });

    it('only hits the reducer once per dispatch despite number of subscribers', () => {
      const reducer = (state, action) => state;
      const spy = sinon.spy(reducer);
      const store = createRxStore(spy, initialState);
      const subscription = store.subscribe();
      const subscription2 = store.subscribe();

      store.dispatch();
      assert.equal(spy.callCount, 1);
      store.dispatch({data: 'test'});
      assert.equal(spy.callCount, 2);
      store.dispatch({data: 'test'});
      assert.equal(spy.callCount, 3);
      const subscription3 = store.subscribe();
      const subscription4 = store.subscribe();
      store.dispatch({data: 'test'});
      assert.equal(spy.callCount, 4);
      store.dispatch({data: 'test'});
      assert.equal(spy.callCount, 5);

      subscription.unsubscribe();
      subscription2.unsubscribe();
      subscription3.unsubscribe();
      subscription4.unsubscribe();
    });

    it('passes current state and action through each dispatch', () => {
      const reducer = (state, action) => state;
      const spy = sinon.spy(reducer);
      const store = createRxStore(spy, initialState);
      const subscription = store.subscribe();

      store.dispatch();
      sinon.assert.calledWith(spy, initialState, undefined);
      store.dispatch({data: 'test'});
      sinon.assert.calledWith(spy, initialState, {data: 'test'});

      subscription.unsubscribe();
    });
  });
});

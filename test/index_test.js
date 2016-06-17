import {assert} from 'chai';
import sinon from 'sinon';
import {createRxStore} from '../src';
import {Subject, Observable} from 'rxjs';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {...state, counter: state.counter + action.payload};
    case 'DECREMENT':
      return {...state, counter: state.counter - action.payload};
    case 'ADD_ITEM':
      var items = state.items;
      items.push(action.payload);
      return {...state, items};
    case 'REMOVE_ITEM':
      var items = state.items;
      items.splice(action.payload, 1);
      return {...state, items};
    default:
      return state;
  }
}

var initialState = {
  counter: 0,
  items: []
};

describe('createRxStore', () => {
  var store;
  beforeEach(() => {
    store = createRxStore(reducer, initialState);
  });
  afterEach(() => {
    store = null;
  });

  describe('action$', () => {
    it('it is an Rxjs Subject', () => {
      assert(store.action$ instanceof Subject);
    });
  });

  describe('state$', () => {
    it('is an Rxjs Observable', () => {
      assert(store.state$ instanceof Observable);
    });

    it('starts with the initialState', (done) => {
      store.state$.subscribe(data => {
        assert.deepEqual(data, initialState);
        done();
      });
    });
  });

  describe('dispatch', () => {
    it('passes data onto the action$ Subject', () => {
      var action$Spy = sinon.stub(store.action$, 'next');
      store.dispatch({data: 2});
      sinon.assert.calledWith(action$Spy, {data: 2});
      action$Spy.restore();
    });

    it('calls reducer on each action dispatched', () => {
      var reducer = (state, action) => state;
      var spy = sinon.spy(reducer);
      var store = createRxStore(spy, initialState);
      store.state$.subscribe();

      store.dispatch();
      assert.equal(spy.callCount, 1);
      sinon.assert.calledWith(spy, initialState, undefined);
      store.dispatch({data: 'test'});
      sinon.assert.calledWith(spy, initialState, {data: 'test'});
      assert.equal(spy.callCount, 2);
    });

    it('passes current state and action through on each dispatch', () => {
      var currentState = null;
      store.state$.subscribe(newState => {
        currentState = newState;
      });
      // sets initial state
      assert.deepEqual(currentState, initialState);

      // returns current state if no matching action
      store.dispatch({type: 'BLAH', payload: 2});
      assert.deepEqual(currentState, initialState);

      // returns new state from reducer
      store.dispatch({type: 'ADD', payload: 3});
      assert.deepEqual(currentState, {
        counter: 3,
        items: []
      });
      store.dispatch({type: 'ADD', payload: 2});
      assert.deepEqual(currentState, {
        counter: 5,
        items: []
      });
      store.dispatch({type: 'DECREMENT', payload: 4});
      assert.deepEqual(currentState, {
        counter: 1,
        items: []
      });
      store.dispatch({type: 'ADD_ITEM', payload: {data: 'I am an item'}});
      assert.deepEqual(currentState, {
        counter: 1,
        items: [{data: 'I am an item'}]
      });
    });
  });
});

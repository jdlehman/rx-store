[![npm version](https://badge.fury.io/js/rx-store.svg)](http://badge.fury.io/js/rx-store)
[![Build Status](https://secure.travis-ci.org/jdlehman/rx-store.svg?branch=master)](http://travis-ci.org/jdlehman/rx-store)
[![Dependency Status](https://david-dm.org/jdlehman/rx-store.svg)](https://david-dm.org/jdlehman/rx-store)

# rx-store

`rx-store` is a reactive solution for managing state. It is framework and view agnostic, though it can be used as the basis for a Flux pattern.

## Installation

`npm install --save rx-store`

## Usage

### Import library

#### ES6

```js
import {createRxStore} from 'rx-store';
```

#### ES5 with modules

```js
var createRxStore = require('rx-store').createRxStore;
```

#### ES5

```html
<script src="node_modules/rx-store/dist/rx-store.min.js"></script>
// window['rx-store'].createRxStore
```

### Create a store

`createRxStore` takes a [reduce function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) as an argument as well as an optional initial state. If not specified the initial state starts out as undefined. Note that the state can be any valid JS type (object, array, number, etc.).

```js
function sum(previousState, nextState) {
  return previousState + nextState;
}
var initialState = 0;
var store = createRxStore(sum, initialState);
```

### Subscribe to State Changes

```js
store.subscribe(function(state) {
  // do stuff with state
});

// which is equivalent to

store.state$.subscribe(function(state) {
  // do stuff with state
});
```

### Modify State

```js
var action = 4;
store.dispatch(action);

// which is equivalent to

store.action$.next(action);

store.subscribe(function(state) {
  console.log('State: ' + state);
});
// State: 0
// State: 4
```

### Modify State from Browser Event

```js
var addTwo$ = Rx.Observable.fromEvent(btnNode, 'click').map(e => {
  return 2;
});

// send each new action to the store
addTwo$.subscribe(function(action) {
  store.dispatch(action);
});
```

### Subscribe to Actions

```js
store.action$.subscribe(function(action) {
  // do stuff with action
});
```

## Using as a Flux Pattern

```js
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      var addState = state;
      addState.count += action.payload;
      return addState;
    case 'ACTION_TWO':
      return actionTwo(state);
    default:
      return state;
  }
}
var initialState = {count: 0, somethingElse: 'data'};
var store = createRxStore(reducer, initialState);

function add(data) {
  return {
    type: 'ADD',
    payload: data
  };
}

var addAction = add(4);
var addAction2 = add(-1);
store.dispatch(addAction);
store.dispatch(addAction2);

store.subscribe(function(data) {
  console.log(data);
});
// {count: 0, somethingElse: 'data'}
// {count: 4, somethingElse: 'data');
// {count: 3, somethingElse: 'data');
```

## Using with React Views

```js
class MyComponent extends React.Component {
  componentDidMount() {
    this.countSubscription = this.props.countStream.subscribe((count) => {
      this.setState({count: count});
    });
  }

  componentWillUnmount() {
    this.countSubscription.unsubscribe();
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

var count$ = store.state$.map(function(data) {
  return data.count;
});
ReactDOM.render(<MyComponent countStream={count$} />, domNode);
```

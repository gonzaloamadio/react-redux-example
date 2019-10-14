// This file will NOT behold react code. As we know redux is a third party library,
// independent from react. Despite they are usually used together.

// We will use this file to show how to create a basic redux flot.

// We will execute this with nodeJS: $ node redux-basics.js

// We want to create everything that is needed.
// -----------------------------------------------------------------

const redux = require('redux'); // node syntax
const createStore = redux.createStore; // createStore is a function
const initialState = {
  counter: 0
};

// ------------------ Reducer ------------------

// We MUST change state in an inmutable way!

const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state, // Copy old state, INMUTABLE WAY!
      counter: state.counter + 1 // Overwrite value needed. state.countr is read only on old state, si it os OK.
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// ------------------ Store ------------------

// The store must be initialized with a reducer, THE reducer.
// There can be multiple reducers, but in the end they will be merged into one.
// It is strongly connected to the store, and is the only thing that may update it.

const store = createStore(rootReducer);
console.log(store.getState());

// ------------------ Subscription ------------------

// Subscribe takes an argument, a function that is executed whenever state is updated.

store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// ------------------ Dispatching Action ------------------

// To dispatch an action, we call dispatch method on the store.
// And that function take an action as an argument.
// An action is a js object that needs to have a type property.
// "type" is a unique identifier of our choice. The convention is to use all
// uppercase string, short and descriptive.
// For the extra parameters, you can add a payload : {}, or a number of properties
// you want to have.
// Then we need to listen for this type of actions in the reducer.
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

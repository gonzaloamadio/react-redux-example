/* eslint-disable react/no-typos */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// combineReducers takes a js object as input, mapping our reducers to
// different slices of our state; and merges everything
// into one state and one reducer for us.
const rootReducer = combineReducers({
  // Create "sections" of our app. We are telling redux:
  // "I got two different features areas in my app (ctr and res),
  // please use these reducers for each and merge everything together
  // in one store, into one state, into one reducer."
  // NOTE: When accesing the state, we now have one more level of nesting.
  // If inside ctr there is a counter property, instead of state.counter,
  // we need to access to state.ctr.counter
  ctr: counterReducer,
  res: resultsReducer
});

const store = createStore(rootReducer);

// Provider is a helper component that allows us to inject our store to the App.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

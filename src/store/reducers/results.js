/* eslint-disable react/no-typos */

// NOTE: In this reducer function, we only have access to this reducer state.
// If we need to get a value from the global state, we should simply get it
// as an action payload.
// This is generally how reducers work anyway most of the time:
// old state + action + (optionally) action data => new state

// Object with all action types
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          value: action.result,
          id: new Date()
        })
      });
    case actionTypes.DELETE_RESULT:
      // Filter return a new array
      const updatedArray = state.results.filter(
        elem => elem.id !== action.resultElId
      );
      return updateObject(state, { results: updatedArray });
    default:
      return state;
  }
};

export default reducer;

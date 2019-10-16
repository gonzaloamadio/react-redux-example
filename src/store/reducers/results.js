/* eslint-disable react/no-typos */

// NOTE: In this reducer function, we only have access to this reducer state.
// If we need to get a value from the global state, we should simply get it
// as an action payload.
// This is generally how reducers work anyway most of the time:
// old state + action + (optionally) action data => new state

// Object with all action types
import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: // Inmutable way of updating an array (add elem)
      return {
        ...state,
        // concate return new array, push no. That is why use concat.
        results: state.results.concat({
          value: action.result,
          id: new Date()
        })
      };
    case actionTypes.DELETE_RESULT: // Inmutable way of updating an array (delete elem)
      // Filter return a new array
      const updatedArray = state.results.filter(
        elem => elem.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
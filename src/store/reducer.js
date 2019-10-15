/* eslint-disable react/no-typos */

// Object with all action types
import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // Another way to modify inmutably an object.
      // IS NOT A DEEP CLONE! , but in this case, we do not modify results, so it is ok
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      // Distribute the state, overwrite counter, do not touch the rest of the state.
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actionTypes.STORE_RESULT: // Inmutable way of updating an array (add elem)
      return {
        ...state,
        // concate return new array, push no. That is why use concat.
        results: state.results.concat({ value: state.counter, id: new Date() })
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

export default rootReducer;

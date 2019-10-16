/* eslint-disable react/no-typos */

// Object with all action types
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default reducer;

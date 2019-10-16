/* eslint-disable react/no-typos */

// Outsource actions types

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// Action creators

export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const add = val => {
  return {
    type: ADD,
    value: val
  };
};
export const subtract = val => {
  return {
    type: SUBTRACT,
    value: val
  };
};

export const storeResultSync = result => {
  return {
    type: STORE_RESULT,
    result: result
  };
};
export const storeResult = result => {
  // The function receives dispatch due to redux-thunk. It is a middleware
  // and it runs between the dispatch and the reducer.
  return dispatch => {
    setTimeout(() => {
      dispatch(storeResultSync(result));
    }, 2000);
  };
};

export const deleteResult = resultElId => {
  return {
    type: DELETE_RESULT,
    resultElId: resultElId
  };
};

/* eslint-disable react/no-typos */

import * as actionTypes from './actionsTypes';

export const storeResultSync = result => {
  return {
    type: actionTypes.STORE_RESULT,
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
    type: actionTypes.DELETE_RESULT,
    resultElId: resultElId
  };
};

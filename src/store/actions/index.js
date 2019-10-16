/* eslint-disable react/no-typos */

// File exporting all the action creators
// It groups all exports for separate files, so in the end
// from other files, we point to this file to import actions.

// import * as actionCreators from './path/to/store/actions/index';

export { add, subtract, increment, decrement } from './counter';

export { storeResult, deleteResult } from './results';

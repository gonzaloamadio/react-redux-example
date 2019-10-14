/* eslint-disable react/no-typos */
const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  if (action.type === 'DEC_COUNTER') {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  if (action.type === 'SUB_COUNTER') {
    return {
      ...state,
      counter: state.counter - action.value
    };
  }
  return state;
};

export default rootReducer;

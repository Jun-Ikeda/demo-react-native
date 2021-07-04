import { combineReducers } from 'redux';
import { INITIAL_STATE, ITestState, ITestStateAction } from './config';

const userReducer = (
  state: ITestState = INITIAL_STATE,
  action: ITestStateAction,
): ITestState => {
  switch (action.type) {
    case 'ADD_NAME':
      return { ...state, name: action.name };
    case 'DELETE_NAME':
      return { ...state, name: '' };
    default:
      return state;
  }
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

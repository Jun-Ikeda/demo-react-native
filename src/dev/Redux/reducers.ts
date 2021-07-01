import { combineReducers } from 'redux';
import { INITIAL_STATE, ITestState, ITestStateAction } from './config';

const reducer = (
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

export const reducers = combineReducers({
  user: reducer,
});

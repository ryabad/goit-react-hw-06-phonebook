import { initialState } from './initialState';
import { FILTER } from './types';

export const filterReducer = (state = initialState, action) => {
  if (action.type === FILTER) {
    return { ...state, filter: action.payload };
  }
  return state;
};

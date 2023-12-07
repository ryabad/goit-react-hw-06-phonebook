import { getInitialState } from './initialState';
import { ADD_CONTACT, DELETE_CONTACT } from './types';

export const userReducer = (state = getInitialState(), action) => {
  if (action.type === ADD_CONTACT) {
    return { ...state, user: [...state.user, action.payload] };
  }
  if (action.type === DELETE_CONTACT) {
    return {
      ...state,
      user: state.user.filter(el => el.id !== action.payload),
    };
  }
  return state;
};

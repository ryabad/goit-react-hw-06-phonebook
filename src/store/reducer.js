import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { filterReducer } from './filter/filterReducer';

export const reducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
});

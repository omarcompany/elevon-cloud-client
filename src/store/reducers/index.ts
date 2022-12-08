import { combineReducers } from 'redux';

import { fileReducer } from './fileReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  file: fileReducer,
  user: userReducer,
});

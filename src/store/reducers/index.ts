import { combineReducers } from 'redux';

import { fileReducer } from './fileReducer';
import { userReducer } from './userReducer';
import { popupReducer } from './popupReducer';

export const rootReducer = combineReducers({
  file: fileReducer,
  user: userReducer,
  popup: popupReducer,
});

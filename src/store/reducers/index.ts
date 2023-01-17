import { combineReducers } from 'redux';

import { file } from './file';
import { user } from './user';
import { popup } from './popup';

export const rootReducer = combineReducers({
  file,
  user,
  popup,
});

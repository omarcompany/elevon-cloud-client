import { AuthorizationStatus } from '../const';
import { dropToken } from '../services/token';
import {
  setActivatedUser,
  setAuthStatus,
  setDefaultUser,
} from '../store/action';
import { signOut } from '../store/api-action/logout';
import { store } from '../store/store';

export const logout = async () => {
  await store.dispatch(signOut());
  dropToken();
  store.dispatch(setActivatedUser(null));
  store.dispatch(setDefaultUser(null));
  store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
};

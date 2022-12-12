import { AuthorizationStatus } from './const';
import { dropToken } from './services/token';
import { setAuthStatus, setUserData } from './store/action';
import { store } from './store/store';

const TOKEN_TYPE = 'Bearer ';

export const getTokenWithType = (token: string) => {
  return `${TOKEN_TYPE}${token}`;
};

export const logout = () => {
  dropToken();
  store.dispatch(setUserData(null));
  store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
};

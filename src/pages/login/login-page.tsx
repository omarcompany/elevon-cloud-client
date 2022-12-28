import { Navigate } from 'react-router-dom';

import { Login } from './components/login';
import { useAppSelector } from '../../store/hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { LoginNavbar } from './components/login-navbar';

export const LoginPage = (): JSX.Element => {
  const authorizationStatus = useAppSelector((store) => store.user.authStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return isAuth ? (
    <Navigate to={AppRoute.Main} />
  ) : (
    <>
      <LoginNavbar />
      <Login />
    </>
  );
};

import { Navigate } from 'react-router-dom';

import { Login } from './components/login';
import { Navbar } from '../../components/navbar';
import { useAppSelector } from '../../store/hooks';
import { AppRoute, AuthorizationStatus } from '../../const';

export const LoginPage = (): JSX.Element => {
  const authorizationStatus = useAppSelector((store) => store.user.authStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return isAuth ? (
    <Navigate to={AppRoute.Main} />
  ) : (
    <>
      <Navbar />
      <Login />
    </>
  );
};

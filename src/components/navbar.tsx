import { Link } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../const';
import { logout } from '../utils';
import { useAppSelector } from '../store/hooks';

export const Navbar = (): JSX.Element => {
  const authStatus = useAppSelector((store) => store.user.authStatus);

  const isAuth = authStatus === AuthorizationStatus.Auth;

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="./images/logo.svg" alt="logotype" className="navbar__logo__image" />
        <p className="navbar__logo__description">Elevon cloud</p>
      </div>
      <div className="navbar__auth">
        {!isAuth && (
          <Link
            className="navbar__auth__link"
            to={AppRoute.Login}
            rel="noopener noreferrer"
          >
            Sign in
          </Link>
        )}
        {!isAuth && (
          <Link
            className="navbar__auth__link"
            to={AppRoute.Registration}
            rel="noopener noreferrer"
          >
            Sign up
          </Link>
        )}
        {isAuth && <div onClick={logout}>Logout</div>}
      </div>
    </nav>
  );
};

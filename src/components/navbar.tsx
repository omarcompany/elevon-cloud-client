import { Link } from 'react-router-dom';

import { AppRoute, AuthorizationStatus, PopupType } from '../const';
import { FileUploader } from '../pages/main/components/file-uploader';
import { logout } from '../utils';
import { openPopup } from '../store/action';
import { store } from '../store/store';
import { useAppSelector } from '../store/hooks';

export const Navbar = (): JSX.Element => {
  const authStatus = useAppSelector((store) => store.user.authStatus);

  const isAuth = authStatus === AuthorizationStatus.Auth;

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          className="navbar__logo__image"
          width={32}
          height={32}
          src="./images/logo.svg"
          alt="logotype"
        />
        <button className="button">Elevon cloud</button>
      </div>
      <button
        className="button"
        onClick={() => {
          store.dispatch(openPopup(PopupType.NewFolder));
        }}
      >
        New folder
      </button>
      <FileUploader />
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
        {isAuth && (
          <div className="navbar__profile">
            <button className="button" onClick={logout}>
              Logout
            </button>
            <img
              className="navbar__profile__info"
              alt="avatar-icon"
              width={32}
              height={32}
              src="./images/avatar-icon.svg"
            ></img>
          </div>
        )}
      </div>
    </nav>
  );
};

import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

export const Navigation = (): JSX.Element => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="" alt="logotype" className="navbar__logo__image" />
        <p className="navbar__logo__description">Elevon cloud</p>
      </div>
      <div className="navbar__auth">
        <Link
          className="navbar__auth__link"
          to={AppRoute.Login}
          rel="noopener noreferrer"
        >
          Sign in
        </Link>
        <Link
          className="navbar__auth__link"
          to={AppRoute.Registration}
          rel="noopener noreferrer"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

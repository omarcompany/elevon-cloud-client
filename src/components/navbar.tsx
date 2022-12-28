import { Link } from 'react-router-dom';

import { AppRoute } from '../const';

export const Navbar = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo button link" to={AppRoute.Main}>
        <img
          className="navbar__logo__image"
          width={32}
          height={32}
          src="./images/logo.svg"
          alt="logotype"
        />
        Elevon cloud
      </Link>
      {children}
    </nav>
  );
};

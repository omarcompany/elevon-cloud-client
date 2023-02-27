import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';
import { Navbar } from '../../../components/navbar';

export const LoginNavbar = (): JSX.Element => {
  return (
    <Navbar>
      <div className="navbar__auth">
        <Link
          className="navbar__auth__link link button"
          to={AppRoute.Registration}
          rel="noopener noreferrer"
        >
          Sign up
        </Link>
      </div>
    </Navbar>
  );
};

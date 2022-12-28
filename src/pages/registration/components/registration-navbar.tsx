import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';
import { Navbar } from '../../../components/navbar';

export const RegistrationNavbar = (): JSX.Element => {
  return (
    <Navbar>
      <div className="navbar__auth">
        <Link
          className="navbar__auth__link"
          to={AppRoute.Login}
          rel="noopener noreferrer"
        >
          Sign in
        </Link>
      </div>
    </Navbar>
  );
};

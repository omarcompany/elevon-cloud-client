import { Link } from 'react-router-dom';

import { AppRoute, BACKEND_URL, PopupType } from '../../../const';
import { FileUploader } from './file-uploader';
import { logout } from '../../../utils';
import { Navbar } from '../../../components/navbar';
import { openPopup } from '../../../store/action';
import { store } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

export const MainNavbar = (): JSX.Element => {
  const user = useAppSelector((store) => store.user.activatedUser);

  const iconUrl = user?.avatar
    ? `${BACKEND_URL}/${user.avatar}`
    : './images/avatar-icon.svg';

  return (
    <Navbar>
      <>
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
          <div className="navbar__profile">
            <button className="button" onClick={logout}>
              Logout
            </button>
            <Link to={AppRoute.Profile}>
              <img
                className="navbar__profile__info"
                alt="avatar-icon"
                width={32}
                height={32}
                src={iconUrl}
              ></img>
            </Link>
          </div>
        </div>
      </>
    </Navbar>
  );
};

import { BACKEND_URL } from '../../../const';
import { logout } from '../../../utils/utils';
import { Navbar } from '../../../components/navbar';
import { useAppSelector } from '../../../store/hooks';

export const ProfileNavbar = (): JSX.Element => {
  const user = useAppSelector((store) => store.user.activatedUser);

  const iconUrl = user?.avatar
    ? `${BACKEND_URL}/${user.avatar}`
    : './images/avatar-icon.svg';

  return (
    <Navbar>
      <div className="navbar__auth">
        <div className="navbar__profile">
          <button className="button" onClick={logout}>
            Logout
          </button>
          <img
            className="navbar__profile__info"
            alt="avatar-icon"
            width={32}
            height={32}
            src={iconUrl}
          ></img>
        </div>
      </div>
    </Navbar>
  );
};

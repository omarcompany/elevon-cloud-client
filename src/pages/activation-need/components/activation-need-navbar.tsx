import { Navbar } from '../../../components/navbar';
import { useAppSelector } from '../../../store/hooks';

export const ActivationNeedNavbar = (): JSX.Element => {
  const user = useAppSelector((store) => store.user.defaultUser);

  const email = user ? user.email : '';

  const iconUrl = './images/avatar-icon.svg';

  return (
    <Navbar>
      <div className="navbar__auth">
        <div className="navbar__profile">
          <p>{email}</p>
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

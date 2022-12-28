import { Profile } from './components/profile';
import { ProfileNavbar } from './components/profile-navbar';

export const ProfilePage = (): JSX.Element => {
  return (
    <>
      <ProfileNavbar />
      <Profile />
    </>
  );
};

import { Registration } from './components/registration';
import { RegistrationNavbar } from './components/registration-navbar';

export const RegistrationPage = (): JSX.Element => {
  return (
    <>
      <RegistrationNavbar />
      <Registration />
    </>
  );
};

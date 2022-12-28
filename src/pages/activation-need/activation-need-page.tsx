import { ActivationNeed } from './components/activation-need';
import { ActivationNeedNavbar } from './components/activation-need-navbar';

export const ActivationNeedPage = (): JSX.Element => {
  return (
    <>
      <ActivationNeedNavbar />
      <ActivationNeed />
    </>
  );
};

import { Auth } from '../../../components/auth/auth';
import { submitAuthMethod } from '../../../types';

export const Login = (): JSX.Element => {
  const onSubmit: submitAuthMethod = (event, email, password) => {};

  return (
    <Auth headerTitle="Login" submitTitle="Sign in" handleSubmit={onSubmit} />
  );
};

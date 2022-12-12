import { Auth } from '../../../components/auth/auth';
import { signIn } from '../../../store/api-ction/login';
import { store } from '../../../store/store';
import { submitAuthMethod } from '../../../types';

export const Login = (): JSX.Element => {
  const onSubmit: submitAuthMethod = (event, { email, password }) => {
    store.dispatch(signIn({ email, password }));
  };

  return (
    <Auth headerTitle="Login" submitTitle="Sign in" handleSubmit={onSubmit} />
  );
};

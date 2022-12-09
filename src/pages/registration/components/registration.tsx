import { Auth } from '../../../components/auth/auth';
import { AuthFormInput } from '../../../components/auth/auth-form-input';
import { AuthFormLabel } from '../../../components/auth/auth-form-label';
import { submitAuthMethod } from '../../../types';

export const Registration = (): JSX.Element => {
  const onSubmit: submitAuthMethod = (event, email, password) => {};

  return (
    <Auth
      headerTitle="Registration"
      submitTitle="Sign up"
      handleSubmit={onSubmit}
    >
      <AuthFormLabel>
        <AuthFormInput
          id="name"
          type="text"
          name="name"
          placeholder="Name..."
        />
      </AuthFormLabel>
    </Auth>
  );
};

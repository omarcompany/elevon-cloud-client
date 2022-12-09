import { useRef } from 'react';

import { Auth } from '../../../components/auth/auth';
import { AuthFormInput } from '../../../components/auth/auth-form-input';
import { AuthFormLabel } from '../../../components/auth/auth-form-label';
import { ErrorMessage } from '../../../const';
import { singUp } from '../../../store/api-ction/registation';
import { store } from '../../../store/store';
import { submitAuthMethod } from '../../../types';

export const Registration = (): JSX.Element => {
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleNameChange = () => {
    if (nameRef.current !== null) {
      const nameField = nameRef.current;

      const containSpace = /[\s]/gi.test(nameField.value);

      const result = !containSpace;

      result === false
        ? nameField.setCustomValidity(ErrorMessage.Name)
        : nameField.setCustomValidity('');
    }
  };

  const onSubmit: submitAuthMethod = (event, { name, email, password }) => {
    store.dispatch(singUp({ name, email, password }));
  };

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
          inputRef={nameRef}
          onChange={handleNameChange}
        />
      </AuthFormLabel>
    </Auth>
  );
};

import { FormEvent, useRef } from 'react';

import { AuthFormInput } from './auth-form-input';
import { AuthFormLabel } from './auth-form-label';
import { submitAuthMethod } from '../../types';

enum ErrorMessage {
  Email = 'Incorrect email, e.g. name@mail.ru',
  Password = "Password must have at least a number and a letter and mustn't contain spaces",
}

interface IAuthProps {
  submitTitle: string;
  headerTitle: string;
  handleSubmit: submitAuthMethod;
  children?: JSX.Element;
}

export const Auth = ({
  submitTitle,
  headerTitle,
  handleSubmit,
  children,
}: IAuthProps): JSX.Element => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleEmailChange = () => {
    if (emailRef.current !== null) {
      const emailField = emailRef.current;

      const result = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        emailField.value
      );

      result === false
        ? emailField.setCustomValidity(ErrorMessage.Email)
        : emailField.setCustomValidity('');
    }
  };

  const handlePasswordChange = () => {
    if (passwordRef.current !== null) {
      const passwordField = passwordRef.current;

      const containNumber = /\d/g.test(passwordField.value);
      const containString = /[a-z]/gi.test(passwordField.value);
      const containSpace = /[\s]/gi.test(passwordField.value);

      const result = containNumber && containString && !containSpace;

      result === false
        ? passwordField.setCustomValidity(ErrorMessage.Password)
        : passwordField.setCustomValidity('');
    }
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      if (handleSubmit) {
        handleSubmit(event, emailRef.current.value, passwordRef.current.value);
      }
    }
  };

  return (
    <form className="auth__form" onSubmit={onFormSubmit}>
      <p className="auth__form__header">{headerTitle}</p>

      {children}
      <AuthFormLabel>
        <AuthFormInput
          id="email"
          type="email"
          name="email"
          placeholder="Email..."
          inputRef={emailRef}
          onChange={handleEmailChange}
        />
      </AuthFormLabel>
      <AuthFormLabel>
        <AuthFormInput
          id="password"
          type="password"
          name="password"
          placeholder="Password..."
          inputRef={passwordRef}
          onChange={handlePasswordChange}
        />
      </AuthFormLabel>
      <AuthFormInput
        className="auth__form__submit"
        type="submit"
        id="submit"
        name="auth__form__submit"
        value={submitTitle}
      />
    </form>
  );
};

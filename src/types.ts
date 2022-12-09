import { FormEvent } from 'react';

export type submitAuthMethod = (
  event: FormEvent<HTMLFormElement>,
  email: string,
  password: string,
  name?: string
) => void;

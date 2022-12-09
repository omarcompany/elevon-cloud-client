import { FormEvent } from 'react';

import { IUserData } from './interfaces';

export type submitAuthMethod = (
  event: FormEvent<HTMLFormElement>,
  userData: IUserData
) => void;

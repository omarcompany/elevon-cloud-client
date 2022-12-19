import { FormEvent } from 'react';

import { IAuthData } from './interfaces';

export type submitAuthMethod = (
  event: FormEvent<HTMLFormElement>,
  userData: IAuthData
) => void;

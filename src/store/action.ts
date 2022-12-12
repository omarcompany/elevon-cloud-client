import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const';
import { IUserData } from '../interfaces';

export const setAuthStatus = createAction<AuthorizationStatus>(
  'global/setAuthStatus'
);

export const setUserData = createAction<IUserData | null>('user/setUserData');

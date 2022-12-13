import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus, PopupType } from '../const';
import { IFile, IUserData } from '../interfaces';

export const setAuthStatus = createAction<AuthorizationStatus>(
  'global/setAuthStatus'
);

export const setUserData = createAction<IUserData | null>('user/setUserData');

export const setFiles = createAction<Array<IFile>>('files/setFiles');

export const setCurrentDir = createAction<string>('files/setCurrentDir');

export const openPopup = createAction<PopupType>('files/openPopup');

export const closePopup = createAction('files/closePopup');

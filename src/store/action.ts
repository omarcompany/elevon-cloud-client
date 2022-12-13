import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus, PopupType } from '../const';
import { IFile, IUserData } from '../interfaces';

export const setAuthStatus = createAction<AuthorizationStatus>(
  'global/setAuthStatus'
);

export const setUserData = createAction<IUserData | null>('user/setUserData');

export const setFiles = createAction<Array<IFile>>('files/setFiles');

export const setCurrentDir = createAction<IFile | null>('files/setCurrentDir');

export const addDirToPath = createAction<IFile>('files/addDirToPath');

export const moveToDir = createAction<IFile | null>('files/moveToDir');

export const openPopup = createAction<PopupType>('popup/openPopup');

export const closePopup = createAction('popup/closePopup');

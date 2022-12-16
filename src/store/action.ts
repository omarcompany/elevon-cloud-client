import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus, PopupType } from '../const';
import { IFile, IUserData } from '../interfaces';

export const setAuthStatus = createAction<AuthorizationStatus>(
  'global/setAuthStatus'
);

export const setUserData = createAction<IUserData | null>('user/setUserData');

export const setFiles = createAction<Array<IFile>>('files/setFiles');

export const addFile = createAction<IFile>('files/addFile');

export const removeFileFromState = createAction<string>(
  'files/removeFileFromState'
);

export const setCurrentDir = createAction<IFile | null>('files/setCurrentDir');

export const setSelectedFile = createAction<IFile | null>(
  'files/setSelectedFile'
);

export const addDirToPath = createAction<IFile>('files/addDirToPath');

export const moveToDir = createAction<IFile | null>('files/moveToDir');

export const openPopup = createAction<PopupType>('popup/openPopup');

export const closePopup = createAction('popup/closePopup');

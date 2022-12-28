import { createAction } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus, PopupType } from '../const';
import { IActivatedUser, IDefaultUser, IFile } from '../interfaces';

export const setAuthStatus = createAction<AuthorizationStatus>(
  'global/setAuthStatus'
);

export const setActivatedUser = createAction<IActivatedUser | null>(
  'user/setActivatedUser'
);

export const setDefaultUser = createAction<IDefaultUser | null>(
  'user/setDefaultUser'
);

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

export const redirectToRoute = createAction<AppRoute>('global/redirectToRoute');

import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../../const';
import { IActivatedUser, IDefaultUser } from '../../interfaces';
import { setActivatedUser, setAuthStatus, setDefaultUser } from '../action';

interface IDefaultState {
  defaultUser: IDefaultUser | null;
  activatedUser: IActivatedUser | null;
  authStatus: AuthorizationStatus;
}

export const defaultState: IDefaultState = {
  defaultUser: null,
  activatedUser: null,
  authStatus: AuthorizationStatus.Unknown,
};

export const user = createReducer(defaultState, (builder) => {
  builder.addCase(setAuthStatus, (state, action) => {
    state.authStatus = action.payload;
  });
  builder.addCase(setDefaultUser, (state, action) => {
    state.defaultUser = action.payload;
  });
  builder.addCase(setActivatedUser, (state, action) => {
    state.activatedUser = action.payload;
  });
});

import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../../const';
import { IUserData } from '../../interfaces';
import { setAuthStatus, setUserData } from '../action';

interface IDefaultState {
  userData: IUserData | null;
  authStatus: AuthorizationStatus;
}

export const defaultState: IDefaultState = {
  userData: null,
  authStatus: AuthorizationStatus.Unknown,
};

export const userReducer = createReducer(defaultState, (builder) => {
  builder.addCase(setAuthStatus, (state, action) => {
    state.authStatus = action.payload;
  });
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
});

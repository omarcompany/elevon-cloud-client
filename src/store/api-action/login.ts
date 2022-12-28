import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptActivatedtUserToClient } from '../../adapter';
import { api, store } from '../store';
import { AuthorizationStatus } from '../../const';
import { IActivatedUserServer, IAuthData } from '../../interfaces';
import { saveToken } from '../../services/token';
import { setActivatedUser, setAuthStatus } from '../action';

export const signIn = createAsyncThunk(
  'signin',
  async ({ email, password }: IAuthData) => {
    try {
      const { data } = await api.post<IActivatedUserServer>('/signin', {
        email,
        password,
      });
      const activatedUser = adaptActivatedtUserToClient(data);
      store.dispatch(setActivatedUser(activatedUser));
      saveToken(activatedUser.accessToken ?? '');
      store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch (error) {
      console.log(error);
    }
  }
);

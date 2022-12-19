import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from '../store';
import { AuthorizationStatus } from '../../const';
import { IAuthData } from '../../interfaces';
import { saveToken } from '../../services/token';
import { setAuthStatus, setUserData } from '../action';
import { adaptUserToClient } from '../../adapter';

export const signIn = createAsyncThunk(
  'signin',
  async ({ email, password }: IAuthData) => {
    try {
      const result = await api.post('/signin', {
        email,
        password,
      });
      saveToken(result.data.token);
      store.dispatch(setUserData(adaptUserToClient(result.data.user)));
      store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch (error) {
      console.log(error);
    }
  }
);

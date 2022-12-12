import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from '../store';
import { AuthorizationStatus } from '../../const';
import { IUserData } from '../../interfaces';
import { saveToken } from '../../services/token';
import { setAuthStatus, setUserData } from '../action';

export const signIn = createAsyncThunk(
  'signin',
  async ({ email, password }: IUserData) => {
    try {
      const result = await api.post('/signin', {
        email,
        password,
      });
      saveToken(result.data.token);
      store.dispatch(setUserData(result.data.user));
      store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch (error) {
      console.log(error);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptDefaultUserToClient } from '../../adapter';
import { api, store } from '../store';
import { AppRoute } from '../../const';
import { IAuthData, IDefaultUserServer } from '../../interfaces';
import { redirectToRoute, setDefaultUser } from '../action';

export const singUp = createAsyncThunk(
  'signup',
  async ({ name, email, password }: IAuthData) => {
    try {
      const { data } = await api.post<IDefaultUserServer>('/signup', {
        name,
        email,
        password,
      });
      const user = adaptDefaultUserToClient(data);
      store.dispatch(setDefaultUser(user));
      store.dispatch(redirectToRoute(AppRoute.ActivationNeed));
    } catch (error) {
      console.log(error);
    }
  }
);

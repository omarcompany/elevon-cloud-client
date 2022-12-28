import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptActivatedtUserToClient } from '../../adapter';
import { AuthorizationStatus } from '../../const';
import { api, store } from '../store';
import { IActivatedUserServer } from '../../interfaces';
import { setActivatedUser, setAuthStatus } from '../action';

export const getUserData = createAsyncThunk('user/getUserData', async () => {
  try {
    const { data } = await api.get<IActivatedUserServer>('/user/me');
    store.dispatch(setActivatedUser(adaptActivatedtUserToClient(data)));
    store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  } catch (error) {
    console.log(error);
  }
});

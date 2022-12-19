import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptUserToClient } from '../../adapter';
import { api, store } from '../store';
import { setUserData } from '../action';

export const getUserData = createAsyncThunk('user/getUserData', async () => {
  try {
    const result = await api.get('/user/me');
    store.dispatch(setUserData(adaptUserToClient(result.data)));
  } catch (error) {
    console.log(error);
  }
});

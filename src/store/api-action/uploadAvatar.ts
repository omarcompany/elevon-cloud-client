import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptUserToClient } from '../../adapter';
import { setUserData } from '../action';
import { api, store } from '../store';

export const uploadAvatar = createAsyncThunk(
  'files/upload-file',
  async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const result = await api.post(`/user/me/avatar`, formData);
      store.dispatch(setUserData(adaptUserToClient(result.data)));
    } catch (error) {
      console.log(error);
    }
  }
);

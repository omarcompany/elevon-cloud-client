import { createAsyncThunk } from '@reduxjs/toolkit';

import { adaptActivatedtUserToClient } from '../../adapter';
import { api, store } from '../store';
import { IActivatedUserServer } from '../../interfaces';
import { setActivatedUser } from '../action';

export const uploadAvatar = createAsyncThunk(
  'files/upload-file',
  async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const { data } = await api.post<IActivatedUserServer>(
        `/user/me/avatar`,
        formData
      );
      store.dispatch(setActivatedUser(adaptActivatedtUserToClient(data)));
    } catch (error) {
      console.log(error);
    }
  }
);

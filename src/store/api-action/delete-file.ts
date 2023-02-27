import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from '../store';
import { removeFileFromState } from '../action';

export const deleteFile = createAsyncThunk(
  'files/delete',
  async (id: string) => {
    try {
      const { data } = await api.delete(`/files/delete/${id}`);
      store.dispatch(removeFileFromState(data.id));
    } catch (error) {
      console.log(error);
    }
  }
);

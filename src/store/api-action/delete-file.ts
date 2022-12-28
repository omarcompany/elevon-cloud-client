import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from '../store';
import { removeFileFromState } from '../action';
import { IFileServer } from '../../interfaces';
import { adaptFileToClient } from '../../adapter';

export const deleteFile = createAsyncThunk(
  'files/delete',
  async (id: string) => {
    try {
      const { data } = await api.delete<IFileServer>(`/files/delete/${id}`);
      const file = adaptFileToClient(data);
      store.dispatch(removeFileFromState(file.id));
    } catch (error) {
      console.log(error);
    }
  }
);
